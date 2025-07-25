import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import {  Types } from 'mongoose';

@Schema()
export class Post  {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  author: string;

  @Prop({ type: [String], default: [] }) 
  media: string[];

  @Prop({ type: Types.ObjectId, ref: 'Category', required: true })
  category: Types.ObjectId;
}

export const PostSchema = SchemaFactory.createForClass(Post);