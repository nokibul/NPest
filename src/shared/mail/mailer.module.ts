import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { MailService } from './mailer.service';
import { LoggerModule } from '../logger/logger.module';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp-relay.brevo.com',
        port: 587,
        ignoreTLS: true,
        secure: false,
        auth: {
          user: process.env.MAILDEV_INCOMING_USER,
          pass: process.env.MAILDEV_INCOMING_PASS,
        },
      },
      defaults: {
        from: '"No Reply" <no-reply@localhost>',
      },
      preview: false,
      template: {
        dir: process.cwd() + '/src/shared/mail/',
        adapter: new PugAdapter(),
        options: {
          strict: true,
        },
      },
    }),
    LoggerModule
  ],
  controllers: [],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
