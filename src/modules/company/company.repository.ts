import { Injectable } from '@nestjs/common';
import Prisma from 'prisma/client.prisma';
import { createCompanyReqDto } from './company.dto';

@Injectable()
export class CompanyRepository {
  async create(createCompanyData: createCompanyReqDto): Promise<any> {
    try {
      const user = await Prisma.company.create({
        data: createCompanyData,
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  async findByName(name: string): Promise<any> {
    try {
      return await Prisma.company.findFirst({ where: { name } });
    } catch (error) {
      throw error;
    }
  }

  async findById(id: string): Promise<any> {
    try {
      return await Prisma.company.findFirst({
        where: { id: parseInt(id) },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
