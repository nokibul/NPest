import { Module } from '@nestjs/common';
import { AuthenticationService } from './account.service';
import { AccountController } from './account.controller';
import { AuthenticationRepository } from './account.repository';
import { MailService } from 'src/shared/mail/mailer.service';

@Module({
  imports: [],
  controllers: [AccountController],
  providers: [AuthenticationService, AuthenticationRepository, MailService],
})
export class AccountModule {}
