import { Contains, IsEmail, IsNotEmpty, Length } from "class-validator";

export class GetEmailDto {
    @IsEmail()
    email: string;
}

export class ValidPassword {
    @IsNotEmpty()
    @Length(10, 20)
    @Contains('@!#$')
    password: string;
}

