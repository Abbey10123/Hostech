import { IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @MinLength(5)
  fullName: string;

  @MinLength(8)
  password: string;
}

export class CreateAdminDto {
  @IsEmail()
  email: string;

  @MinLength(5)
  fullName: string;
}
