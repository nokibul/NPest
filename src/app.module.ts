import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { AccountModule } from './modules/account/account.module';
import { MailModule } from './shared/mail/mailer.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from './shared/logger/logger.module';

@Module({
  imports: [AuthModule, AccountModule, MailModule, LoggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
