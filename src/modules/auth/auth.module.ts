import { Module } from '@nestjs/common';
import { AccountModule } from '../account/account.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { MailModule } from 'src/shared/mail/mailer.module';
// import { AccountRepository } from '../account/account.repository';
// import { LoggerService } from 'src/shared/logger/logger.service';
import { LoggerModule } from 'src/shared/logger/logger.module';
import { AuthenticationService } from './auth.service';

@Module({
  imports: [
    MailModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60000s' },
    }),
    AccountModule,
    LoggerModule,
  ],
  controllers: [],
  providers: [AuthenticationService],
  exports: [AuthenticationService],
})
export class AuthModule {}
