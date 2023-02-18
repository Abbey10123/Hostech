import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { User, UserType } from '../interface/user.interface';
import { UnauthorizedException } from '@nestjs/common/exceptions';

@Injectable()
export class NotVerifiedEmailStrategy extends PassportStrategy(
  Strategy,
  'admin-access',
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'jwtEncryptionKey',
    });
  }

  async validate(loginInfo: User) {
    if (loginInfo.userType !== UserType.Admin){
        throw new UnauthorizedException({
            message: `You are not an admin`,
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
