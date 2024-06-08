import React, { FC } from 'react';
import { View } from 'react-native';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChangePasswordSchema } from '@/schemas/user.schema';
import { ChangePasswordType } from '@/types/user.types';
import { ControlledInput } from '@/components/ControlledInput';
import FormError from '@/components/FormError';
import Button from '@/components/Button';
import { useChangePassword } from '@/api/auth';
import Toast from 'react-native-toast-message';

const DefaultChangePasswordData: ChangePasswordType = {
  password: '',
  newPassword: '',
};

const ChangePasswordForm: FC = () => {
  const form = useForm({
    resolver: zodResolver(ChangePasswordSchema),
    defaultValues: DefaultChangePasswordData,
  });

  const { mutate } = useChangePassword({
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Password changed successfully',
      });
    },
    onError: (error) => {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error.message,
      });
    },
  });

  const onSubmit = (data: ChangePasswordType) => {
    mutate(data);
    form.reset(DefaultChangePasswordData);
  };

  return (
    <View className="flex-1 w-full">
      <View className="px-5">
        <FormProvider {...form}>
          <ControlledInput
            name="password"
            label="Password"
            secureTextEntry
            classNameContainer="mt-3"
          />
          <ControlledInput
            name="newPassword"
            label="New Password"
            secureTextEntry
            classNameContainer="mt-3"
          />
          <FormError form={form} />
          <Button
            classname="bg-navy-blue mt-5"
            text={'Save Changes'}
            onPress={form.handleSubmit(onSubmit)}
          />
        </FormProvider>
      </View>
    </View>
  );
};

export default ChangePasswordForm;
