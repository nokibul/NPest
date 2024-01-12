import { Injectable } from '@nestjs/common';
import { CompanyRepository } from './company.repository';
import { createCompanyReqDto } from './company.dto';
import { LoggerService } from 'src/shared/logger/logger.service';

@Injectable()
export class CompanyService {
  constructor(
    private readonly _companyRepository: CompanyRepository,
    private readonly _logger: LoggerService
  ) {}

  async createCompany(createCompanyData: createCompanyReqDto): Promise<any> {
    try {
      this._logger.log('Company create service');
      const createdCompany =
        await this._companyRepository.create(createCompanyData);
      return createdCompany;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  login(): string {
    return 'Hurrah! You are now logged in';
  }
}
