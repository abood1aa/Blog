import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment } from 'src/core/schema/comment.schema';
import { CommentDto, idCommentDto } from './DTO/comment.dto.post';

@Injectable()
export class CommentService {
    constructor(@InjectModel(Comment.name) private commentModel:Model<Comment> ){}
    createComment = async (comment:CommentDto)=>{
        await this .commentModel.create(comment)
        return {meesage:"Success",comment}
    }
    

    getComment = async(commentId:idCommentDto)=>{
        let comment = await this.commentModel.findById(commentId).
        populate('author','-email -password -_id -role')
        .populate('post')
        return {meesage:"Success",comment}
    }


    getComments = async()=>{
        let comments = await this.commentModel.find().
        populate('author','-email -password -_id -role')
        .populate('post')
        return {meesage:"Success",comments}
    }

    UpdateComment = async(comments:CommentDto,commentid:idCommentDto)=>{
        let comment = await this.commentModel.findByIdAndUpdate(commentid,comments,{new:true})
        return {meesage:"Success",comment}
    }

    deleteComment = async(commentid:idCommentDto)=>{
        let comment = await this.commentModel.findByIdAndDelete(commentid,{new:true})
        return {meesage:"Success",comment}
    }
}
