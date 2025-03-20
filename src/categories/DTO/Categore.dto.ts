import { IsString, IsNotEmpty } from 'class-validator';

export class CategoryDto {
  
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  
  @IsString()
  @IsNotEmpty()
  post: string;

  @IsString()
  @IsNotEmpty()
  author: string;

}

export class idCategoryDto{
    id:string;
    }