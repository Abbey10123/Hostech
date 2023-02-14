import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommunityEntity } from './entities/community.entity';
import { User } from './interface/user.interface';
import * as bcrypt from 'bcrypt';
import { BadRequestException } from '@nestjs/common/exceptions';
import { generateOtp } from 'src/helpers/otp-generator.helper';
import { sendEmail } from 'src/helpers/send-email.helper';
import { OtpEntity } from './entities/otp.entity';
import { Otp, OtpReason } from './interface/otp.interface';

@Injectable()
export class CommunityService {
  constructor(
    @InjectRepository(CommunityEntity)
    private communityRepository: Repository<CommunityEntity>,
    @InjectRepository(OtpEntity)
    private otpRepository: Repository<OtpEntity>
  ) { }
  //check if email is registered
  async isEmailRegistered(email: string) {
    const userWithEmail = await this.communityRepository.findOne({
      where: { email },
    });
    if (userWithEmail) {
      return userWithEmail;
    }
    return false;
  }

  async createUser(user) {
    try {
      if (await this.isEmailRegistered(user.email)) {
        throw 'This Email address is already registered';
      }

      // lets encrypt the password
      const encryptedPass = await bcrypt.hash(user.password, 5);
      user.password = encryptedPass

      // Save the user to the DB
      const userSaved = await this.communityRepository.save(user);
      // Generate Otp
      const otp = generateOtp();
      const expiry = new Date();
      expiry.setMinutes(expiry.getMinutes() + 15);
      await this.otpRepository.save({
        user_id : userSaved.id,
        code : otp.toString(),
        // reason: OtpReason.verifyEmail,
        expiryDate: expiry,        
      })
      //Send a message to the user
      delete userSaved.password;
      return {
        userDetails: userSaved,
        message:
          'You have successfully registered! Welcome to Talent Dev Community',
      };
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async login(loginInfo) {
    // not sure if this is correct
    try {
      // check if user is already registered
      const userCheck = await this.isEmailRegistered(loginInfo.email);
      if (!userCheck) {
        throw 'This email address is not registered with us! Please register first';
      }

      //Check if the password is correct

      if (!(await bcrypt.compare(loginInfo.password, userCheck.password)))
        throw 'Invalid password';

      delete userCheck.password;
      return {
        user: userCheck,
        message: 'You have successfully logged in',
      };
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async forgotPassword(email) {
    try{
      const user = await this.communityRepository.findOne({where:{email: email}}) ;
      if(!user){
        throw new Error("Email does not exist");
      }
      // const d = new Date();
      // const dd= d.setMinutes(d.getMinutes() + 30);

      const otpValue = generateOtp();
      const newOtp = this.otpRepository.create({
        code : otpValue.toString(),
        // expiryDate: dd.toISOString(),
        userId: user.id,
        reason: OtpReason.resetPassword
      });
      const savedOtp = await this.otpRepository.save(newOtp);
      const message = `Please input this verification code ${savedOtp.code} to reset your password`
      const subject = `Password Reset`
      sendEmail(user, message, subject);
      return `Reset email sent successfully`
    }
    catch(err) {
      console.log(err)
      return err
    }

  }

  async resetPassword (otp, password) {
    try{
      const otpUser = await this.otpRepository.findOne({where: {code: otp}});
      if(!otpUser){
        throw new Error("Otp not valid");
      }
      const encryptPassword = await bcrypt.hash(password, 10);
      const updatedUser = await this.communityRepository.update(otpUser.userId, {password: encryptPassword})
      return `Password updated successfully  ` ;
    }
    catch(err){
      console.log(err)
    }
  }
}


