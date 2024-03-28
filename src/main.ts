import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import { DatabaseExceptionFilter } from './shared/filters/exception.db';
import { HttpExceptionFilter } from './shared/filters/exception.http';
import { LoggerService } from './shared/logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    {
      logger: new LoggerService(),
    }
  );
  const config = new DocumentBuilder()
    .setTitle('NPest')
    .setDescription('Personal Project bro')
    .setVersion('1.0')
    .addTag('PMA')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // app.useGlobalFilters(new DatabaseExceptionFilter());
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(3000, '0.0.0.0');
}
bootstrap();
