import * as z from 'zod';

export const MemberModel = z.object({
  id: z.number().int(),
  accountId: z.number().int(),
  companyId: z.number().int(),
  isApproved: z.boolean(),
  createdById: z.number().int(),
});

export type MemberModelType = z.infer<typeof MemberModel>;
