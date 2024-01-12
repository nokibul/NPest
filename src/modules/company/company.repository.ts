import { Injectable } from '@nestjs/common';
import Prisma from 'prisma/client.prisma';
import { createCompanyReqDto } from './company.dto';
import { LoggerService } from 'src/shared/logger/logger.service';
// import { PrismaService } from 'nestjs-prisma';
@Injectable()
export class CompanyRepository {
  constructor(private readonly _logger: LoggerService) {}

  async create(createCompanyData: createCompanyReqDto): Promise<any> {
    this._logger.log('Company create repository');
    const { name, type, address, about, email, createdById } =
      createCompanyData;
    const newCompany = await Prisma.company.create({
      data: {
        name: name,
        type: type,
        address: address,
        about: about,
        email: email,
        createdBy: {
          connect: { id: createdById },
        },
      },
      select: {
        name: true,
        createdBy: {
          select: { name: true },
        },
      },
    });

    return newCompany;
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
