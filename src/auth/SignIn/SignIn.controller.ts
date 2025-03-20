import { Body, Controller, Post } from '@nestjs/common';
import { SigninService } from './signin.service';
import { Signindto } from '../DTO/sign.dto'; 

@Controller('signin')
export class SigninController {
    constructor(private _SigninService:SigninService){}
@Post()
signin(@Body() body:Signindto){
return this._SigninService.signin(body)
}
}
