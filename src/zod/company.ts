import * as z from 'zod';

export const CompanyModel = z.object({
  id: z.number().int(),
  name: z.string(),
  type: z.string().nullish(),
  address: z.string().nullish(),
  about: z.string().nullish(),
  email: z.string().nullish(),
  createdById: z.number().int(),
});
