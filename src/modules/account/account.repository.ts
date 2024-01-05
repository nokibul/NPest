import { Injectable } from '@nestjs/common';
import Prisma from 'prisma/client.prisma';
import { AccountDTO } from './account.dto';
@Injectable()
export class AccountRepository {
  async create(signupDto: AccountDTO): Promise<any> {
    try {
      const user = await Prisma.account.create({
        data: signupDto,
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  async findByEmail(email: string): Promise<any> {
    const user = Prisma.account.findFirst({ where: { email } });
    return user;
  }
}
