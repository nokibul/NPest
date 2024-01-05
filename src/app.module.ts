import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './modules/account/account.module';
import { MemberModule } from './modules/member/member.module';
import { CompanyModule } from './modules/company/company.module';
import { MailModule } from './shared/mail/mailer.module';
import { AuthModule } from './auth/auth.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [MailModule, AccountModule, MemberModule, CompanyModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
