import { Controller, Get, Inject, forwardRef } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    @Inject(forwardRef(() => AppService))
    private readonly appService: AppService
  ) {}

  // @ApiBearerAuth()
  // @UseGuards(AuthGuard)
  @Get('protected-api')
  getHello(): string {
    return this.appService.getHello();
  }
}
