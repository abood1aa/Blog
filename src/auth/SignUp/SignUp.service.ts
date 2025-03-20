import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import * as bcrypt from "bcrypt";
import { User } from "src/core/schema/user.schema";
import { idDto, SignUpdto } from "../DTO/sign.dto";
import { EmailService } from "src/Email/email.service";



@Injectable()
export class SignUpService {
   
constructor(@InjectModel(User.name) private userModel:Model<User> ,private emailService: EmailService ){}
 creatNewUser = async (user:SignUpdto)=>{
const newUser =  await this.userModel.findOne({email:user.email})
if(newUser)throw new HttpException('User already exists', HttpStatus.CONFLICT)
    user.password = await bcrypt.hash(user.password, 8);

    this.userModel.create(user)
    await this.emailService.sendEmail(user.email)
    return {message:"Success",user}
}
 
getUser = async (userid : idDto)=>{
    let user = await this.userModel.findById(userid)
    return {message:"Success",user}

}

getAllUsers = async ()=>{
    let users = await this.userModel.find()
    return {message:"Success",users}

}
 
UpdateUser = async (userid:idDto,user:SignUpdto)=>{
     let users = await this.userModel.findByIdAndUpdate(user,userid,{new:true})
}

deleteUser = async (userid:idDto)=>{
    let user = await this.userModel.findByIdAndUpdate(userid)
}


}