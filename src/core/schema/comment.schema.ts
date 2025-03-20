import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema({timestamps:true,versionKey:false})
export class Comment{
   
    @Prop({required:true})
    content:string;

    @Prop({ type: Types.ObjectId, ref: 'Post', required: true })
    post: string;

    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    author: string;

    @Prop ({ type: Date, default: Date.now })
    createdAt:string;

    @Prop({ type: [String], default: [] })
    media: string[];
}

export const CommentSchema= SchemaFactory.createForClass(Comment);

