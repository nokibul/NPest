import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { MemberModule } from './member/member.module';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [AccountModule, MemberModule, CompanyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
