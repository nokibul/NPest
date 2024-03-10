import { Injectable } from '@nestjs/common';
import { AccountDTO } from './account.dto';
import Prisma from '../../../prisma/client.prisma';

@Injectable()
export class AccountRepository {
  async create(signupDto: AccountDTO): Promise<any> {
    const user = await Prisma.account.create({
      data: signupDto,
      select: {
        name: true,
        email: true,
      },
    });
    return user;
  }

  async findByEmail(email: string): Promise<any> {
    const user = await Prisma.account.findFirst({ where: { email } });
    return user;
  }
}
