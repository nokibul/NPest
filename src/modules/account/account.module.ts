import { Module, forwardRef } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AuthenticationService } from '../auth/auth.service';
import { AccountRepository } from './account.repository';
import { AuthModule } from '../auth/auth.module';
import { AccountService } from './account.service';
import { MailService } from 'src/shared/mail/mailer.service';
import { LoggerService } from 'src/shared/logger/logger.service';

@Module({
  imports: [forwardRef(() => AuthModule)],
  controllers: [AccountController],
  providers: [
    MailService,
    AuthenticationService,
    AccountRepository,
    AccountService,
    LoggerService,
  ],
  exports: [AccountRepository, AccountService],
})
export class AccountModule {}
