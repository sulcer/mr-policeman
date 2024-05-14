import React from 'react';
import { Text, View } from 'react-native';
import RegisterForm from '@/components/RegisterForm';

const RegisterScreen = () => {
  return (
    <View className={'flex-1 w-full mt-32'}>
      <View className={'px-5 mb-5'}>
        <Text className={'text-3xl font-bold dark:text-white'}>
          Registration
        </Text>
        <Text className={'dark:text-white'}>
          Join platform Mister Policeman
        </Text>
      </View>
      <RegisterForm />
    </View>
  );
};

export default RegisterScreen;
