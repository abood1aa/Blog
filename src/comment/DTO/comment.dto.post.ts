import { IsString, IsNotEmpty } from 'class-validator';

export class CommentDto {
  
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  post: string;

  @IsString()
  @IsNotEmpty()
  author: string;
}

export class idCommentDto{
    id:string;
    }