import * as z from 'zod';

const CompanyModel = z.object({
  id: z.number().int(),
  name: z.string(),
  type: z.string().nullish(),
  address: z.string().nullish(),
  about: z.string().nullish(),
  email: z.string().nullish(),
  createdById: z.number().int(),
});

export type CompanyModelType = z.infer<typeof CompanyModel>;

export default { CompanyModel };
