import { Injectable } from '@nestjs/common';
import Prisma from 'prisma/client.prisma';
import { MemberCreateReqDto } from './member.dto';

@Injectable()
export class MemberRepository {
  async create(createMemberData: MemberCreateReqDto): Promise<any> {
    try {
      const user = await Prisma.companyMember.create({
        data: {
          account: {
            connect: { id: 1 }, // Replace with the actual accountId
          },
          company: {
            connect: { id: 1 }, // Replace with the actual companyId
          },
          isApproved: true,
          createdBy: {
            connect: { id: 2 }, // Replace with the actual createdById
          },
        },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }
}
