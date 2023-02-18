import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD
  app.useGlobalPipes(
    new ValidationPipe(),
  );
=======
  app.useGlobalPipes(new ValidationPipe());
>>>>>>> master

  await app.listen(3000);
}
bootstrap();
