import * as z from 'zod';

export const ControlSchema = z.object({
  name: z.string().min(1, { message: 'Address is required' }),
  location: z.string().min(1, { message: 'Location is required' }),
  type: z.string().min(1, { message: 'Type is required' }),
  description: z.string().min(1, { message: 'Description is required' }),
});
