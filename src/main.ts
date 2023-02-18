import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ppid } from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
<<<<<<< HEAD
    new ValidationPipe(),
=======
    new ValidationPipe({
    //  whitelist: true,
    }),
>>>>>>> 9747be4e795cc3016ad5f7b56572b58ee074c24d
  );

  await app.listen(3000);
}
bootstrap();
