import { IsEmail, MinLength, Length } from 'class-validator';
import { Gender } from '../interface/user.interface';
export class UpdateCommunityDto {
    
    email ?: string;
  
    
    fullName ?: string;

    gender ?: Gender;

    
    phoneNumber ?: string;

    
    title ?: string;
}
