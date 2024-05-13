import React from 'react';
import { Text, View } from 'react-native';
import LoginForm from '@/components/LoginForm';

const LoginScreen = () => {
  return (
    <View className={'flex-1 w-full mt-32'}>
      <View className={'px-5 mb-5'}>
        <Text className={'text-3xl font-bold dark:text-white'}>Login</Text>
        <Text className={'dark:text-white'}>
          Login to platform Mister Policeman
        </Text>
      </View>
      <LoginForm />
    </View>
  );
};

export default LoginScreen;
