import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { FastifyReply } from 'fastify';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<FastifyReply>();
    const status = exception.getStatus();
    const message = exception.message;
    let type = 'UNKNOWN';
    if (exception instanceof NotFoundException) {
      type = 'NOT_FOUND';
    } else if (exception instanceof ForbiddenException) {
      type = 'FORBIDDEN';
    }
    response.status(status).send({
      statusCode: status,
      message,
      type,
    });
  }
}
