import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps:true,versionKey:false})
export class User{
    @Prop({required:true})
    name:string;

    @Prop({required:true})
    email:string;

    @Prop({required:true,})
    password:string;

  @Prop({ required: true, enum: ['admin', 'user'], default: 'user' })
  role: string; 

}

export const UserSchema= SchemaFactory.createForClass(User);

