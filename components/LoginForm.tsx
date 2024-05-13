import React, { FC } from 'react';
import { View } from 'react-native';
import { FormProvider, useForm } from 'react-hook-form';
import { SignInCredentialsSchema } from '@/schemas/user.schema';
import { SignInCredentialsType } from '@/types/user.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { ControlledInput } from '@/components/ControlledInput';
import FormError from '@/components/FormError';
import Button from '@/components/Button';
import { Link } from 'expo-router';

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
          <Link className="mt-5" href={'/forgottenPassword'}>
            Forgotten password?
          </Link>
          <Button
            classname="bg-navy-blue mt-5"
            text={'Log in'}
            onPress={() => console.log('Pressed')}
          />
          <Link className="mt-5 text-center" href={'/register'}>
            Don't have an account? Register here
          </Link>
        </FormProvider>
      </View>
    </View>
  );
};

export default LoginForm;
