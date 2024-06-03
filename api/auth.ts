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
}

const signIn = async (dto: SignInDto) => {
  const res = await apiInstance.post('/auth/sign-in', dto);
  return res.data as Session;
};


const signUp = async (dto: SignUpDto) => {
  const res = await apiInstance.post('/auth/sign-up', dto);
  return res.data as Session;
};


export const useSignIn = (opts?: UseMutationOptions<Session, Error, SignInDto, unknown>) => {
  return useMutation({
    mutationKey: ['sign-in'],
    mutationFn: signIn,
    ...opts,
  });
};

export const useSignUp = (opts?: UseMutationOptions<Session, Error, SignUpDto, unknown>) => {
  return useMutation({
    mutationKey: ['sign-up'],
    mutationFn: signUp,
    ...opts,
  });
};