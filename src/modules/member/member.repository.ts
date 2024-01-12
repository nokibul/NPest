import { Injectable } from '@nestjs/common';
import Prisma from 'prisma/client.prisma';
import { memberCreateData } from './member.dto';

@Injectable()
export class MemberRepository {
  async create(data: memberCreateData): Promise<any> {
    try {
      const { accountId, createdById, companyId, isApproved } = data;
      const user = await Prisma.companyMember.create({
        data: {
          account: {
            connect: { id: accountId },
          },
          company: {
            connect: { id: companyId },
          },
          isApproved: isApproved,
          createdBy: {
            connect: { id: createdById },
          },
        },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }
}
