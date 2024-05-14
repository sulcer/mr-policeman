import React, { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { View } from 'react-native';
import { zodResolver } from '@hookform/resolvers/zod';
import { ForgotPasswordSchema } from '@/schemas/user.schema';
import { ForgotPasswordType } from '@/types/user.types';
import Button from '@/components/Button';
import { ControlledInput } from '@/components/ControlledInput';
import FormError from '@/components/FormError';
import { router } from 'expo-router';

const DefaultResetPasswordData: ForgotPasswordType = {
  email: '',
};

const ResetPasswordForm: FC = () => {
  const form = useForm({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: DefaultResetPasswordData,
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
          <FormError form={form} />
          <Button
            classname="bg-navy-blue mt-5"
            text={'Reset Password'}
            onPress={() => router.navigate('login')}
          />
        </FormProvider>
      </View>
    </View>
  );
};

export default ResetPasswordForm;
