import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
  forwardRef,
} from '@nestjs/common';
import { AccountRepository } from '../account/account.repository';
import { createFullName } from 'src/shared/utils/string.util';
import { MailService } from 'src/shared/mail/mailer.service';
import * as bcrypt from 'bcrypt';
import { AccountDTO, LoginDto } from '../account/account.dto';
import { JwtService } from '@nestjs/jwt';
import { LoggerService } from 'src/shared/logger/logger.service';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly _mailService: MailService,
    private readonly _jwtService: JwtService,
    @Inject(forwardRef(() => AccountRepository))
    private readonly _accountRepository: AccountRepository,
    private readonly _logger: LoggerService
  ) {}

  private async validateUser(email: string, password: string) {
    const user: AccountDTO = await this._accountRepository.findByEmail(email);
    if (!user) {
      throw new NotFoundException('Account not found');
    }

    return await this.comparePasswords(password, user.password);
  }

  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    return hashedPassword;
  }

  private async comparePasswords(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }

  async signup(signupData: AccountDTO): Promise<any> {
    try {
      const { firstName, lastName, password } = signupData;

      const fullName = createFullName(firstName, lastName);
      const hashedPassword = await this.hashPassword(password);

      this._logger.log('Creating user');
      const user = await this._accountRepository.create({
        ...signupData,
        name: fullName,
        password: hashedPassword,
      });

      await this._mailService.sendEmail(
        user.email,
        'Welcome to NPest',
        user.name
      );

      return user;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async login({ email, password }: LoginDto): Promise<any> {
    try {
      const isUserValidated = await this.validateUser(email, password);
      if (!isUserValidated) {
        throw new UnauthorizedException('Credentials dont match');
      }

      const JwtPayload = { email };
      const accessToken = await this._jwtService.signAsync(JwtPayload);

      return {
        access_token: accessToken,
      };
    } catch (error) {
      throw new Error();
    }
  }
}
