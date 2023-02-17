import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { User } from '../interface/user.interface';

@Injectable()
export class NotVerifiedEmailStrategy extends PassportStrategy(
  Strategy,
  'not-verified-email',
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'jwtEncryptionKey',
    });
  }

  async validate(loginInfo: User) {
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
