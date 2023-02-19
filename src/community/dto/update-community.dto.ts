import { IsEmail, MinLength, Length, IsOptional } from 'class-validator';
import { Gender } from '../interface/user.interface';
export class UpdateCommunityDto {
  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @MinLength(5)
  fullName?: string;

  @IsOptional()
  gender?: Gender;

  @IsOptional()
  @Length(11, 13)
  phoneNumber?: string;

  @IsOptional()
  @MinLength(2)
  title?: string;
}
