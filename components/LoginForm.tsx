import React, { FC, useEffect } from 'react';
import { View, Text } from 'react-native';
import { FormProvider, useForm } from 'react-hook-form';
import { SignInCredentialsSchema } from '@/schemas/user.schema';
import { SignInCredentialsType } from '@/types/user.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { ControlledInput } from '@/components/ControlledInput';
import FormError from '@/components/FormError';
import Button from '@/components/Button';
import { Link, router } from 'expo-router';
import { useSignIn } from '@/api/auth';
import { useSession } from '@/hooks/useSession';
import { getUser } from '@/db/user';

const DefaultLoginData: SignInCredentialsType = {
  email: '',
  password: '',
};

const LoginForm: FC = () => {
  const form = useForm({
    resolver: zodResolver(SignInCredentialsSchema),
    defaultValues: DefaultLoginData,
  });

  const session = useSession();

  const { mutate } = useSignIn({
    onSuccess: (data) => {
      session.login(data);
      router.navigate('onboarding');
    },
    onError: (error) => {
      console.error(error);
    },
  });

  useEffect(() => {
    const checkSession = async () => {
      const user = await getUser();
      if (user) {
        session.login(user);
        router.navigate('onboarding');
      }
    };
    checkSession();
  }, []);

  const onSubmit = (data: SignInCredentialsType) => {
    mutate(data);
    form.reset(DefaultLoginData);
  };

  return (
    <View className="flex-1 w-full">
      <View className="px-5">
        <FormProvider {...form}>
          <ControlledInput
            name="email"
            label="Email"
            keyboardType="email-address"
          />
          <ControlledInput
            name="password"
            label="Password"
            secureTextEntry
            classNameContainer="mt-5"
          />
          <FormError form={form} />
          <Link
            className="mt-5 font-semibold text-right"
            href={'/forgotten-password'}
          >
            Forgotten password?
          </Link>
          <Button
            classname="bg-navy-blue mt-5"
            text={'Log in'}
            onPress={form.handleSubmit(onSubmit)}
          />
          <Link className="mt-5 text-center" href={'/register'}>
            Don't have an account?{' '}
            <Text className="text-navy-blue font-semibold">Register here</Text>
          </Link>
        </FormProvider>
      </View>
    </View>
  );
};

export default LoginForm;
