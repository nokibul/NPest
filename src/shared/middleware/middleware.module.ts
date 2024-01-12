import { Module } from '@nestjs/common';
import { AuthGuard } from './jwt.middleware';

@Module({
  providers: [AuthGuard],
  exports: [AuthGuard],
})
export class MiddlewareModule {}
