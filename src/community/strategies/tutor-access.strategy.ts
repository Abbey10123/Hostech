import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { User, UserType } from '../interface/user.interface';
import { UnauthorizedException } from '@nestjs/common/exceptions';

@Injectable()
export class TutorStrategy extends PassportStrategy(
  Strategy,
  'tutor-access',
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'jwtEncryptionKey',
    });
  }

  async validate(loginInfo: User) {
    if (loginInfo.userType !== UserType.Tutor){
        throw new UnauthorizedException({
            message: `You are not a Tutor`,
        });
    }

    return {
      userId: loginInfo.id,
      fullName: loginInfo.fullName,
      email: loginInfo.email,
      gender: loginInfo.gender,
      userType: loginInfo.userType,
      title: loginInfo.title,
    };
  }
}
