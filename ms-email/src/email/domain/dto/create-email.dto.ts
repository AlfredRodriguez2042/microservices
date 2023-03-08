import { z } from 'zod';

export const CreateEmailDto = z.object({
  to: z.string(),
  from: z.string(),
  templateId: z.string(),
  dynamicTemplateData: z.record(z.string(), z.any()).optional(),
});
