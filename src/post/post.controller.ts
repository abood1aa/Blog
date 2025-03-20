import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { PostService } from './post.service';
import { idpostDto, PostDto } from './DTO/post.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { multerConfig } from 'src/multer.config';


    @Controller('posts')
    export class PostController {
      constructor(private readonly _PostService: PostService) {}
    
      @Post()
      @UseInterceptors(FilesInterceptor('files', 10, multerConfig))  
      async AddPost(
        @Body() post: PostDto,
        @UploadedFiles() files: Express.Multer.File[], 
      ) {
        return this._PostService.createPost(post,files);
      }
    
    @Get(':id')
    getpost(@Param('id') postid: idpostDto){
        return this._PostService.getPost(postid)
    }

    @Get()
    getAllposts(){
        return this._PostService.getAllPosts()
    }

    @Put(':id')
    updatepost(@Param('id') postid: idpostDto, @Body()post:PostDto){
        return this._PostService.updatepost(postid,post)
    }

    @Delete(':id')
    deletepost(@Param('id') postid: idpostDto){
        return this._PostService.deletepost(postid)
    }
}
