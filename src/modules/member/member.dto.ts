import { MemberModelType } from './member.validation';

export type MemberCreateReqDto = MemberModelType;

export interface memberCreateData {
  accountId: number;
  companyId: number;
  isApproved: boolean;
  createdById: number;
}
