import React from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import ResetPasswordForm from '@/components/ResetPasswordForm';
import { router } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

const ForgottenPassword = () => {
  return (
    <View className={'flex-1 w-full mt-14'}>
      <View className={'px-5 mb-5'}>
        <View className={'flex flex-col'}>
          <Pressable className={'w-12 h-12'}>
            <TouchableOpacity onPress={() => router.navigate('login')}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
          </Pressable>
        </View>
        <Text className={'text-3xl font-bold dark:text-white'}>
          Forgotten Password
        </Text>
        <Text className={'dark:text-white'}>Reset your password here</Text>
      </View>
      <ResetPasswordForm />
    </View>
  );
};

export default ForgottenPassword;
