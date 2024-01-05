import { Injectable } from '@nestjs/common';
import { AuthenticationRepository } from './account.repository';
import { MailService } from 'src/shared/mail/mailer.service';
import { createFullName } from 'src/shared/utils/string.util';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly _authenticationRepository: AuthenticationRepository,
    private readonly _mailService: MailService
  ) {}
  async signup(signupData: any): Promise<string> {
    try {
      const { firstName, lastName } = signupData;

      const fullName = createFullName(firstName, lastName);

      const user = await this._authenticationRepository.signup({
        name: fullName,
        ...signupData,
      });

      await this._mailService.sendEmail(
        user.email,
        'Welcome to NPest',
        user.name
      );

      return 'Hurrah! You are now registered';
    } catch (error) {
      throw error;
    }
  }

  login(): string {
    return 'Hurrah! You are now logged in';
  }
}
