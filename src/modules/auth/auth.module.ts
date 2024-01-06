import { Module } from '@nestjs/common';
import { AccountModule } from '../account/account.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { MailModule } from 'src/shared/mail/mailer.module';
import { MailService } from 'src/shared/mail/mailer.service';
import { AccountRepository } from '../account/account.repository';

@Module({
  imports: [
    MailModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60000s' },
    }),
    AccountModule,
  ],
  controllers: [],
  providers: [MailService, JwtService, AccountRepository],
  exports: [MailService],
})
export class AuthModule {}
