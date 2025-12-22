import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /* 
to apply the validation globally in my nestjs application we make a validation pipeline
whitelist: true // removes the properties which are not added in our dto
forbindNonWhiteListed: true // gives error when unknown properties is coming
*/

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
  app.enableShutdownHooks();
}
bootstrap();
