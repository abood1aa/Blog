import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema()
export class Category  {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  description: string;

   @Prop({ type: Types.ObjectId, ref: 'Post', required: true })
      post: string;

      
    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    author: string;

}

export const CategorySchema = SchemaFactory.createForClass(Category);