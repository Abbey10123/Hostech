import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { User } from '../interface/user.interface';


@Injectable()
export class NotVerifiedEmailStrategy extends PassportStrategy(Strategy,'not-verified-email',) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'jwtEncryptionKey',
    });
  }

  async validate(loginInfo: User) {
    return { userId: loginInfo.id, 
             FullName: loginInfo.fullName,
             Email:loginInfo.email,
             Gender:loginInfo.gender,
             UserType:loginInfo.userType,
             Title:loginInfo.title,
            
        };
  }
}