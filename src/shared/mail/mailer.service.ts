import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class MailService {
  constructor(private readonly _mailerService: MailerService, private readonly _logger: LoggerService) {}

  async sendEmail(email: string, subject: string, name: string): Promise<void> {
    this._logger.log(`Sending email to ${email}`)
    await this._mailerService.sendMail({
      to: email,
      subject: subject,
      template: 'template.pug',
      context: {
        name,
      },
    });
  }
}
