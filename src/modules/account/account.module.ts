import { Module, forwardRef } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AuthenticationService } from '../auth/auth.service';
import { AccountRepository } from './account.repository';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [forwardRef(() => AuthModule)],
  controllers: [AccountController],
  providers: [AuthenticationService, AccountRepository],
  exports: [AccountRepository],
})
export class AccountModule {}
