import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from 'src/core/schema/post.schema';
import { idpostDto, PostDto } from './DTO/post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name) private postModel: Model<Post>,
  ) {}

  async createPost(post: PostDto, files: Express.Multer.File[]) {
    const { title, content, author, category } = post;
    const baseUrl = 'http://localhost:3004';
    let mediaUrls: string[] = [];

    if (files && files.length > 0) {
      mediaUrls = files.map(file => {
        return `${baseUrl}/${file.path.replace(/\\/g, '/')}`;
      });
    }

   

    const newPost = await this.postModel.create({
      title,
      content,
      author,
      media: mediaUrls, 
      category,
    });

    return { message: 'Success', post: newPost };
  }
    getPost = async (postid : idpostDto)=>{
        let post = await this.postModel.findById(postid).
        populate('author','-email -password -_id -role').
        populate('category')
        return {message:"Success",post}
    
    }
    getAllPosts = async ()=>{
        let posts = await this.postModel.find().
        populate('author','-email -password -_id -role')
        return {message:"Success",posts}
    
    }

    async updatePost(id: string, updatePostDto: PostDto, file?: Express.Multer.File) {
      const baseUrl = 'http://localhost:3004';
      let imageUrl = null;
  
      const existingPost = await this.postModel.findById(id);
      if (!existingPost) {
        throw new Error('Post not found');
      }
  
      
  
      if (file && file.path) {
        imageUrl = `${baseUrl}/${file.path.replace(/\\/g, '/')}`;
        existingPost.media = [imageUrl]; 
      }
  
      const updatedPost = await this.postModel.findByIdAndUpdate(
        id,
        {
          $set: {
            title: updatePostDto.title || existingPost.title,
            content: updatePostDto.content || existingPost.content,
            author: updatePostDto.author || existingPost.author,
            category: updatePostDto.category || existingPost.category,
            media: imageUrl ? [imageUrl] : existingPost.media,
          },
        },
        { new: true }, 
      );
  
      return { message: 'Post updated successfully', post: updatedPost };
    }

    deletepost = async (postid : idpostDto)=>{
        let posts = await this.postModel.findByIdAndDelete(postid,{new:true})
        return {message:"Success",posts : "Post not found"}

    }


}
