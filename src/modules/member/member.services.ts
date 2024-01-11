import { Injectable } from '@nestjs/common';
import { MemberRepository } from './member.repository';

@Injectable()
export class MemberService {
  constructor(private readonly _memberRepository: MemberRepository) {}

  async create(): Promise<any> {
    await this._memberRepository.create();
    return 'Member added in company';
  }
}
