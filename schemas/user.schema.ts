import * as z from 'zod';

export const BaseRegisterSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }).email({
    message: 'Entered email is not valid',
  }),
  username: z.string().min(1, { message: 'Username is required' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long' }),
});

export const SignInCredentialsSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }).email({
    message: 'Entered email is not valid',
  }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long' }),
});

export const ForgotPasswordSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }).email({
    message: 'Entered email is not valid',
  }),
});

export const ChangePasswordSchema = z.object({
  password: z
    .string()
    .min(6, { message: 'Geslo mora vsebovati vsaj 6 znakov' }),
  newPassword: z
    .string()
    .min(6, { message: 'Geslo mora vsebovati vsaj 6 znakov' }),
});
