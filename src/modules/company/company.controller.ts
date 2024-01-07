import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Res,
  UsePipes,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { createCompanyReqDto } from './company.dto';
import { ErrorResponseUtil } from 'src/shared/utils/response.util';
import { FastifyReply } from 'fastify';
import { ZodValidationPipe } from 'src/zod/zod.pipe';
import validation from './company.validation';
import { CompanyRepository } from './company.repository';
import { LoggerService } from 'src/shared/logger/logger.service';

@Controller('companies')
export class CompanyController {
  constructor(
    private readonly _companyService: CompanyService,
    private readonly _companyRepository: CompanyRepository,
    private readonly _logger: LoggerService
  ) {}

  @Post()
  @UsePipes(new ZodValidationPipe(validation.CompanyModel))
  async createCompany(
    @Res() res: FastifyReply,
    @Body() createCompanyData: createCompanyReqDto
  ) {
    try {
      await this._companyService.createCompany(createCompanyData);
    } catch (error) {
      return ErrorResponseUtil.sendErrorResponse(
        res,
        'Error while creating a company',
        error.code
      );
    }
  }

  @Get(':id')
  async getCompany(
    @Res() res: FastifyReply,
    @Param('id') id: string
  ): Promise<any> {
    try {
      this._logger.log(`Fetching company id: ${id}`);
      const company = await this._companyRepository.findById(id);

      if (!company) {
        throw new NotFoundException('Company not found');
      }
      return company;
    } catch (error) {
      return ErrorResponseUtil.sendErrorResponse(
        res,
        error.message,
        error.getStatus()
      );
    }
  }
}
