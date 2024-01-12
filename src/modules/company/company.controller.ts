import {
  Body,
  Controller,
  Get,
  // HttpException,
  NotFoundException,
  Param,
  Post,
  Res,
  UsePipes,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { createCompanyReqDto } from './company.dto';
import { FastifyReply } from 'fastify';
import { ZodValidationPipe } from 'src/zod/zod.pipe';
import validation from './company.validation';
import { CompanyRepository } from './company.repository';
import { LoggerService } from 'src/shared/logger/logger.service';
import { Response } from 'src/shared/utils/response.util';

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
  ): Promise<any> {
    try {
      this._logger.log('Company create controller');
      const createdCompany =
        await this._companyService.createCompany(createCompanyData);

      Response.sendResponse(res, {
        statusCode: 201,
        message: 'Company created successfully',
        data: createdCompany,
      });
    } catch (error) {
      return Response.sendErrorResponse(res, error);
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
      return Response.sendErrorResponse(res, error);
    }
  }
}
