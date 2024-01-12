import { Module } from '@nestjs/common';
import { MiddlewareModule } from 'src/shared/middleware/middleware.module';
import { MemberRepository } from './member.repository';
import { MemberService } from './member.services';
import { MemberController } from './member.controller';
import { LoggerService } from 'src/shared/logger/logger.service';

@Module({
  imports: [MiddlewareModule],
  controllers: [MemberController],
  providers: [MemberRepository, MemberService, LoggerService],
  exports: [],
})
export class MemberModule {}
