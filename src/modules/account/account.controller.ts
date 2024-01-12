import {
  Body,
  Controller,
  Inject,
  Post,
  Res,
  UsePipes,
  forwardRef,
} from '@nestjs/common';
import { ZodValidationPipe } from 'src/zod/zod.pipe';
import { ApiBody } from '@nestjs/swagger';
import Validation from './account.validation';
import { LoginDto, AccountDTO } from './account.dto';
import { AuthenticationService } from '../auth/auth.service';
import { Response } from 'src/shared/utils/response.util';
import { FastifyReply } from 'fastify';

@Controller('auth')
export class AccountController {
  constructor(
    @Inject(forwardRef(() => AuthenticationService))
    private readonly _authenticationService: AuthenticationService
  ) {}

  @Post('/signup')
  @UsePipes(new ZodValidationPipe(Validation.signup))
  @ApiBody({ type: AccountDTO })
  async signup(
    @Res() res: FastifyReply,
    @Body() signupData: AccountDTO
  ): Promise<any> {
    try {
      await this._authenticationService.signup(signupData);
      Response.sendResponse(res, {
        statusCode: 201,
        message: 'User created',
      });
    } catch (error) {
      return Response.sendErrorResponse(res, error);
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
