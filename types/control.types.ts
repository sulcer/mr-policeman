import * as z from 'zod';
import { ControlSchema } from '@/schemas/control.schema';

export type ControlType = z.infer<typeof ControlSchema>;
