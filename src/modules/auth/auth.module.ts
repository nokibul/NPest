import { Module } from '@nestjs/common';
import { AccountModule } from '../account/account.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { MailModule } from 'src/shared/mail/mailer.module';

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
  // providers: [],
})
export class AuthModule {}
