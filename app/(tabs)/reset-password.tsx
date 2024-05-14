import React from 'react';
import { Text, View } from 'react-native';
import RegisterForm from '@/components/RegisterForm';
import ResetPasswordForm from '@/components/ResetPasswordForm';

const ResetPassword = () => {
  return (
    <View className={'flex-1 w-full mt-32'}>
      <View className={'px-5 mb-5'}>
        <Text className={'text-3xl font-bold dark:text-white'}>
          Reset Password
        </Text>
        <Text className={'dark:text-white'}>Reset your password here</Text>
      </View>
      <ResetPasswordForm />
    </View>
  );
};

export default ResetPassword;
