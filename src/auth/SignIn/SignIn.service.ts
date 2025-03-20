import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/core/schema/user.schema';
import { Signindto } from '../DTO/sign.dto';

@Injectable()
export class SigninService {
    constructor(@InjectModel(User.name) private userModel: Model<User>,private _jwtService:JwtService) {}

    signin = async(user:Signindto)=>{
        let isUser=await this.userModel.findOne({email:user.email})
if ( !(isUser&&compareSync(user.password,isUser.password)))
    throw new HttpException('Forbidden ', HttpStatus.UNAUTHORIZED)
let token= this._jwtService.sign({role: isUser.role,userid:isUser._id},{secret:"aliu#1234@@"})

return {message:"done ",token:token}
    }
}