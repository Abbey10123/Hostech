import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '../interface/user.interface';

@Injectable()
export class VerifiedEmailStrategy extends PassportStrategy(
  Strategy,
  'verified-email',
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'jwtEncryptionKey',
    });
  }

  async validate(loginInfo: User) {
    if (!loginInfo.emailVerified) {
      throw new UnauthorizedException();
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
