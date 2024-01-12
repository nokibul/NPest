import { Injectable } from '@nestjs/common';
import { MemberRepository } from './member.repository';
import { memberCreateData } from './member.dto';

@Injectable()
export class MemberService {
  constructor(private readonly _memberRepository: MemberRepository) {}

  async create({
    accountId,
    companyId,
    createdById,
    isApproved,
  }: memberCreateData): Promise<any> {
    await this._memberRepository.create({
      accountId,
      companyId,
      createdById,
      isApproved,
    });

    return 'Member added in company';
  }
}
