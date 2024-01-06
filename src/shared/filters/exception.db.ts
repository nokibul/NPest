import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Catch(PrismaClientKnownRequestError)
export class DatabaseExceptionFilter implements ExceptionFilter {
  catch(error: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'An error occurred while processing your request';

    switch (error.code) {
      case 'P2002':
        status = HttpStatus.CONFLICT;
        message = 'Duplicate record: This record already exists';
        break;
      default:
        break;
    }

    response.status(status).send({
      statusCode: status,
      message,
    });
  }
}
