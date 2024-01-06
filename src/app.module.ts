import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { AuthGuard } from './modules/auth/auth.guard';
import { AuthModule } from './modules/auth/auth.module';
import { AccountModule } from './modules/account/account.module';
import { MailModule } from './shared/mail/mailer.module';

@Module({
  imports: [AuthModule, AccountModule, MailModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
