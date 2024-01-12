import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { AccountModule } from './modules/account/account.module';
import { MailModule } from './shared/mail/mailer.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from './shared/logger/logger.module';
import { CompanyModule } from './modules/company/company.module';
import { MemberModule } from './modules/member/member.module';
// import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [
    AuthModule,
    AccountModule,
    MailModule,
    LoggerModule,
    CompanyModule,
    MemberModule,
    // PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
