import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/shared/middleware/jwt.middleware';
import { MemberService } from './member.services';
import { memberCreateData } from './member.dto';
import { LoggerService } from 'src/shared/logger/logger.service';
import { FastifyReply } from 'fastify';
import { Response } from 'src/shared/utils/response.util';

@Controller('members')
export class MemberController {
  constructor(
    private readonly _memberService: MemberService,
    private readonly _logger: LoggerService
  ) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(
    @Res() res: FastifyReply,
    @Body() body: memberCreateData
  ): Promise<any> {
    try {
      this._logger.log('Create member controller');
      const member = await this._memberService.create(body);

      Response.sendResponse(res, {
        statusCode: 201,
        message: 'Company created successfully',
        data: member,
      });
    } catch (error) {
      Response.sendErrorResponse(res, error);
    }
  }
}
