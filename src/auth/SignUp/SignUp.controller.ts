import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { SignUpService } from "./SignUp.service";
import { idDto, SignUpdto } from "../DTO/sign.dto";
import { AuthGuard, Roles, RolesGuard } from "src/core/guard/guard";




@Controller('signup')
export class SignUpController{
    constructor(private _SignupService: SignUpService) {}
    @Post()
    signUp(@Body() user:SignUpdto){
        return this._SignupService.creatNewUser(user)
    }
    @Get(':id')
    getUser(@Param('id') userid:idDto){
        return this._SignupService.getUser(userid);
    } 
    @Get()
    @UseGuards(AuthGuard, RolesGuard)
 @Roles('admin')
    getusers(){
        return this._SignupService.getAllUsers()

    }

    @Put(':id')
    updateUser(@Param('id') userid:idDto ,@Body()user:SignUpdto){
         return this._SignupService.UpdateUser(userid,user)
    }

    @Delete(':id')
    deleteUser(@Param('id') userid:idDto){
         return this._SignupService.deleteUser(userid)
    }


}