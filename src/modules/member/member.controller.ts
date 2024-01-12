import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/shared/middleware/jwt.middleware';
import { MemberService } from './member.services';
import { memberCreateData } from './member.dto';
import { LoggerService } from 'src/shared/logger/logger.service';

@Controller('members')
export class MemberController {
  constructor(
    private readonly _memberService: MemberService,
    private readonly _logger: LoggerService
  ) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(@Body() body: memberCreateData): Promise<any> {
    try {
      this._logger.log('Create member controller');
      await this._memberService.create(body);
    } catch (error) {}
  }
}
