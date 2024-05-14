import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { FormProvider, useForm } from 'react-hook-form';
import { SignInCredentialsSchema } from '@/schemas/user.schema';
import { SignInCredentialsType } from '@/types/user.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { ControlledInput } from '@/components/ControlledInput';
import FormError from '@/components/FormError';
import Button from '@/components/Button';
import { Link, router } from 'expo-router';

const DefaultLoginData: SignInCredentialsType = {
  email: '',
  password: '',
};

const LoginForm: FC = () => {
  const form = useForm({
    resolver: zodResolver(SignInCredentialsSchema),
    defaultValues: DefaultLoginData,
  });

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
            href={'/reset-password'}
          >
            Forgotten password?
          </Link>
          <Button
            classname="bg-navy-blue mt-5"
            text={'Log in'}
            onPress={() => router.navigate('home')}
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
