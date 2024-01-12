import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(error: any, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'An error occurred while processing your reque   st';
    console.log(error);
    if (error instanceof PrismaClientKnownRequestError) {
      const fields = error?.meta?.target || 'unknown_field';
      switch (error.code) {
        case 'P2002':
          status = HttpStatus.CONFLICT;
          message = `Unique constraint failed on: [${fields}]`;
          break;
        default:
          break;
      }
    }

    response.status(status).send({
      statusCode: status,
      message,
    });
  }
}
