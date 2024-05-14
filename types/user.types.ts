import * as z from 'zod';
import {
  BaseRegisterSchema,
  ChangePasswordSchema,
  ForgotPasswordSchema,
  SignInCredentialsSchema,
} from '@/schemas/user.schema';

export type BaseRegisterType = z.infer<typeof BaseRegisterSchema>;

export type SignInCredentialsType = z.infer<typeof SignInCredentialsSchema>;

export type ForgotPasswordType = z.infer<typeof ForgotPasswordSchema>;

export interface User {
  id: string;
  email: string;
}

export type ChangePasswordType = z.infer<typeof ChangePasswordSchema>;
