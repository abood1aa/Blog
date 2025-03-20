import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { CategoriesModule } from './categories/categories.module';
import { EmailModule } from './Email/email.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/blag12'),
    AuthModule,
    PostModule,
    CommentModule,
    CategoriesModule,
    EmailModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
