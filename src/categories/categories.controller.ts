import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoryDto, idCategoryDto } from './DTO/Categore.dto';

@Controller('categories')
export class CategoriesController {
        constructor(private _CategoriesService:CategoriesService){}
        @Post()
        Addcategory(@Body() category:CategoryDto){
            return this._CategoriesService.createCategory(category)
        }

          @Get(':id')
            getcategory(@Param('id') Category: idCategoryDto){
                return this._CategoriesService.getCategory(Category)
            }
}
