import { IsEmail, IsMongoId, IsString, IsStrongPassword, MaxLength, MinLength } from "class-validator";


export class SignUpdto{
    @MaxLength(20)
    @MinLength(2)
    name:string;
    @IsEmail()
    @IsString()

    email:string;

    @IsStrongPassword()
    password:string;

}

export class Signindto{
   
    @IsEmail()
    email:string;
    @IsStrongPassword()
    password:string;

}
export class idDto{
id:string;
}