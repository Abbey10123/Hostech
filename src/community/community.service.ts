import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommunityEntity } from './entities/community.entity';
import { User } from './interface/user.interface';
import * as bcrypt from 'bcrypt';
import { BadRequestException } from '@nestjs/common/exceptions';

@Injectable()
export class CommunityService {
  constructor(
    @InjectRepository(CommunityEntity)
    private communityRepository: Repository<CommunityEntity>,
  ) {}
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

  async createUser(user: User) {
    try {
      if (await this.isEmailRegistered(user.email)) {
        throw 'This Email address is already registered';
      }

      // lets encrypt the password
      const encryptedPass = await bcrypt.hash(user.password, 5);
      user.password = encryptedPass;

      // Save the user to the DB
      const userSaved = await this.communityRepository.save(user);

      //More Checks

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

  async login(loginInfo: User) {
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
}
