import { Controller, Get, Inject, UseGuards, forwardRef } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './modules/auth/auth.guard';

@Controller()
export class AppController {
  constructor(
    @Inject(forwardRef(() => AppService))
    private readonly appService: AppService
  ) {}

  @UseGuards(AuthGuard)
  @Get('protected-api')
  getHello(): string {
    return this.appService.getHello();
  }
}
