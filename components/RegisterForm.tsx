import React, { FC } from 'react';
import { View } from 'react-native';
import FormError from '@/components/FormError';
import { FormProvider, useForm } from 'react-hook-form';
import { ControlledInput } from '@/components/ControlledInput';
import Button from '@/components/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { BaseRegisterSchema } from '@/schemas/user.schema';
import { BaseRegisterType } from '@/types/user.types';
import { router } from 'expo-router';

const DefaultRegisterData: BaseRegisterType = {
  email: '',
  username: '',
  password: '',
};

const RegisterForm: FC = () => {
  const form = useForm({
    resolver: zodResolver(BaseRegisterSchema),
    defaultValues: DefaultRegisterData,
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
            name="username"
            label="Username"
            keyboardType="default"
            classNameContainer="mt-5"
          />
          <ControlledInput
            name="password"
            label="Password"
            secureTextEntry
            classNameContainer="mt-5"
          />
          <FormError form={form} />
          <Button
            classname="bg-navy-blue mt-5"
            text={'Register'}
            onPress={() => router.navigate('login')}
          />
        </FormProvider>
      </View>
    </View>
  );
};

export default RegisterForm;
