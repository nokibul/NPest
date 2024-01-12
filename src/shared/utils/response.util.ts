import { HttpStatus } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { FastifyReply } from 'fastify';

export class Response {
  static sendErrorResponse(response: FastifyReply, error: any): any {
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'An error occurred while processing your request';

    if (error instanceof PrismaClientKnownRequestError) {
      const fields = error?.meta?.target || 'unknown_field';
      switch (error.code) {
        case 'P2002':
          status = HttpStatus.CONFLICT;
          message = `Another record exists with field: [${fields}]`;
          break;
        case 'P2000':
          status = HttpStatus.BAD_REQUEST;
          message = `The provided value for the column is too long for the column's type. Column: [${fields}]`;
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

  static sendResponse(
    res: FastifyReply,
    {
      statusCode,
      data = null,
      message,
    }: {
      statusCode: number;
      data?: any | null;
      message: string;
    }
  ) {
    res.status(statusCode).send({
      success: true,
      statusCode,
      message,
      data,
    });
  }
}
