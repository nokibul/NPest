import * as z from 'zod';

import { Gender } from '@prisma/client';

const signup = z.object({
  name: z.string().nullish(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  birthDate: z.string(),
  password: z.string(),
  contactNo: z.string().nullish(),
  gender: z.nativeEnum(Gender),
  secondaryEmail: z.string().nullish(),
  location: z.string().nullish(),
  about: z.string().nullish(),
  isActive: z.boolean(),
});

export default { signup };
