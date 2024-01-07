import { Module } from '@nestjs/common';
import { CompanyRepository } from './company.repository';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { LoggerModule } from 'src/shared/logger/logger.module';

@Module({
  imports: [LoggerModule],
  providers: [CompanyRepository, CompanyService],
  controllers: [CompanyController],
  exports: [CompanyRepository, CompanyService],
})
export class CompanyModule {}
