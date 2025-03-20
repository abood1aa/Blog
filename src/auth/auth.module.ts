import { Module } from '@nestjs/common';
import { SignUpController } from './SignUp/SignUp.controller';
import { SignUpService } from './SignUp/SignUp.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/core/schema/user.schema';
import { JwtService } from '@nestjs/jwt';
import { SigninService } from './SignIn/signin.service';
import { SigninController } from './SignIn/SignIn.controller';
import { EmailModule } from 'src/Email/email.module';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),EmailModule
  ],
  providers: [SignUpService,SigninService,JwtService],
  controllers: [SignUpController,SigninController],
})
export class AuthModule {}
