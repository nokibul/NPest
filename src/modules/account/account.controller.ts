import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { AuthenticationService } from './account.service';
import { ZodValidationPipe } from 'src/zod/zod.pipe';
import { ApiBody } from '@nestjs/swagger';
import Validation from './account.validation';
import { SignupDto } from './account.dto';

@Controller('auth')
export class AccountController {
  constructor(private readonly _authenticationService: AuthenticationService) {}

  @Post('/signup')
  @UsePipes(new ZodValidationPipe(Validation.signup))
  @ApiBody({ type: SignupDto })
  signup(@Body() signupData: SignupDto): any {
    try {
      return this._authenticationService.signup(signupData);
    } catch (error) {
      throw error;
    }
  }

  @Post('/login')
  login(): string {
    return this._authenticationService.login();
  }
}
