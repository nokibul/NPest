import {
  Body,
  Controller,
  Inject,
  Post,
  UsePipes,
  forwardRef,
} from '@nestjs/common';
import { ZodValidationPipe } from 'src/zod/zod.pipe';
import { ApiBody } from '@nestjs/swagger';
import Validation from './account.validation';
import { LoginDto, AccountDTO } from './account.dto';
import { AuthenticationService } from '../auth/auth.service';

@Controller('auth')
export class AccountController {
  constructor(
    @Inject(forwardRef(() => AuthenticationService))
    private readonly _authenticationService: AuthenticationService
  ) {}

  @Post('/signup')
  @UsePipes(new ZodValidationPipe(Validation.signup))
  @ApiBody({ type: AccountDTO })
  signup(@Body() signupData: AccountDTO): any {
    try {
      return this._authenticationService.signup(signupData);
    } catch (error) {
      throw error;
    }
  }

  @Post('/login')
  async login(@Body() loginDto: LoginDto): Promise<any> {
    try {
      return await this._authenticationService.login(loginDto);
    } catch (error) {
      return {
        message: 'Error while login',
        statusCode: 400,
      };
    }
  }
}
