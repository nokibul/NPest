import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  NotFoundException,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import { FastifyReply } from 'fastify';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<FastifyReply>();
    const status = exception.getStatus();
    let message = exception.message;
    let type = 'UNKNOWN';
    if (exception instanceof NotFoundException) {
      type = 'NOT_FOUND';
      message = 'Not found';
    } else if (exception instanceof ForbiddenException) {
      type = 'FORBIDDEN';
      message = 'User access forbidden';
    } else if (exception instanceof UnauthorizedException) {
      type = 'UNAUTHORISED';
      message = 'User access unauthorised';
    }
    response.status(status).send({
      statusCode: status,
      message,
      type,
    });
  }
}
