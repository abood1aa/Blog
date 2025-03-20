import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentDto, idCommentDto } from './DTO/comment.dto.post';

@Controller('comment')
export class CommentController {
    constructor(private _CommentService:CommentService){}

    @Post()
    AddComment(@Body() comment:CommentDto){
        return this._CommentService.createComment(comment)
    }

    @Get(':id')
    getComment(@Param('id') comment: idCommentDto){
        return this._CommentService.getComment(comment)
    }

    @Get()
    getComments(){
        return this._CommentService.getComments()
    }

    @Put(':id')
    UpdateComment(@Param('id') commentId: idCommentDto, @Body() comment: CommentDto){
        return this._CommentService.UpdateComment(comment, commentId)
    }

    @Delete(':id')
    deleteComment(@Param('id') commentId: idCommentDto){
        return this._CommentService.deleteComment( commentId)
    }

}
