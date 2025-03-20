// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import * as path from 'path';
// import { NestExpressApplication } from '@nestjs/platform-express';

// async function bootstrap() {
//   const app = await NestFactory.create<NestExpressApplication>(AppModule);
//   app.useStaticAssets(path.join(__dirname, '..', 'uploads'), {
//     prefix: '/uploads/', // ده الجزء اللي هيتضاف للمسار في الـ URL
//   });
//   await app.listen(3000);
// }
// bootstrap();







import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import   join  from 'path';
import * as path from 'path';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));

  app.useStaticAssets(path.join(__dirname, '..', 'uploads'), {
    prefix: '/uploads', 
  });

  app.enableCors();

  await app.listen(process.env.PORT ?? 3004);
  console.log(`Application is running on: http://localhost:${process.env.PORT ?? 3004}`);
}
bootstrap();