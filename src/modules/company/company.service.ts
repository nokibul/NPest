import { Injectable } from '@nestjs/common';
import { CompanyRepository } from './company.repository';
import { createCompanyReqDto } from './company.dto';

@Injectable()
export class CompanyService {
  constructor(private readonly _companyRepository: CompanyRepository) {}

  async createCompany(createCompanyData: createCompanyReqDto): Promise<any> {
    try {
      const company = await this._companyRepository.create(createCompanyData);

      return company;
    } catch (error) {
      throw error;
    }
  }

  login(): string {
    return 'Hurrah! You are now logged in';
  }
}
