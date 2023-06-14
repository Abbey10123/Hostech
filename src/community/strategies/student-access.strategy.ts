import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User, UserType } from "../interface/user.interface";


@Injectable()
export class StudentStrategy extends PassportStrategy(Strategy, 'student-access'){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'jwtEncryptionKey',
          });  
    }

    async validate(loginInfo: User) {
        if (loginInfo.userType == UserType.Student){
            return {
                    userId: loginInfo.id,
                    fullName: loginInfo.fullName,
                    email: loginInfo.email,
                    gender: loginInfo.gender,
                    userType: loginInfo.userType,
                    title: loginInfo.title,
                  }
                }
            }
        }
    
