import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from 'src/core/schema/Categories.schema';
import { CategoryDto, idCategoryDto } from './DTO/Categore.dto';

@Injectable()
export class CategoriesService {
        constructor(@InjectModel(Category.name) private categoryModel:Model<Category> ){}
     createCategory = async (category:CategoryDto)=>{
            await this .categoryModel.create(category)
            return {meesage:"Success",category}
        }

        getCategory = async (categoryid:idCategoryDto)=>{
          let category=  await this .categoryModel.findById(categoryid).
          populate('author','-email -password -_id -role')
          .populate('post')
            return {meesage:"Success",category}
        }

    
        getCategorys = async ()=>{
          let categorys=  await this .categoryModel.find().
          populate('author','-email -password -_id -role')
          .populate('post')
            return {meesage:"Success",categorys}
        }

}
