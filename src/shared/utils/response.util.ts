import { FastifyReply } from 'fastify';

export class ErrorResponseUtil {
  static sendErrorResponse(
    res: FastifyReply,
    message: string,
    statusCode: number
  ) {
    res.status(statusCode).send({
      error: {
        message,
        statusCode,
      },
    });
  }
}
