import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmail(email: string, subject: string, name: string): Promise<void> {
    await this.mailerService.sendMail({
      to: email,
      subject: subject,
      template: 'template.pug',
      context: {
        name,
      },
    });
  }
}
