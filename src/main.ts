import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { DatabaseExceptionFilter } from './shared/filters/exception.db';
// import { HttpExceptionFilter } from './filters/exception.http';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  const config = new DocumentBuilder()
    .setTitle('NPest')
    .setDescription('Personal Project bro')
    .setVersion('1.0')
    .addTag('PMA')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalFilters(new DatabaseExceptionFilter());

  await app.listen(3000);
}
bootstrap();
