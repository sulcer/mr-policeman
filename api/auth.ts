import { apiInstance } from '@/api/axios';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

export type SignInDto = {
  email: string;
  password: string;
};

export type SignUpDto = {
  email: string;
  username: string;
  password: string;
};

export type Session = {
  accessToken: string;
};

export type ChangePasswordDto = {
  password: string;
  newPassword: string;
};

const signIn = async (dto: SignInDto) => {
  const res = await apiInstance.post('/auth/sign-in', dto);
  return res.data as Session;
};

const signUp = async (dto: SignUpDto) => {
  const res = await apiInstance.post('/auth/sign-up', dto);
  return res.data as Session;
};

export const useSignIn = (
  opts?: UseMutationOptions<Session, Error, SignInDto, unknown>
) => {
  return useMutation({
    mutationKey: ['sign-in'],
    mutationFn: signIn,
    ...opts,
  });
};

export const useSignUp = (
  opts?: UseMutationOptions<Session, Error, SignUpDto, unknown>
) => {
  return useMutation({
    mutationKey: ['sign-up'],
    mutationFn: signUp,
    ...opts,
  });
};

export const changePassword = async (dto: ChangePasswordDto) => {
  if (dto.password === dto.newPassword) {
    throw new Error(
      'New password must be different from the current password.'
    );
  }
  return dto.password !== dto.newPassword;
};

export const useChangePassword = (
  opts?: UseMutationOptions<boolean, Error, ChangePasswordDto, unknown>
) => {
  return useMutation({
    mutationKey: ['change-password'],
    mutationFn: changePassword,
    ...opts,
  });
};
