import { IsEmail, MinLength, Length } from 'class-validator';
import { Gender } from '../interface/user.interface';
export class UpdateCommunityDto {
    @IsEmail()
    email ?: string;
  
    @MinLength(5)
    fullName ?: string;

    gender ?: Gender;

    @Length(11, 13)
    phoneNumber ?: string;

    @MinLength(2)
    title ?: string;
}
