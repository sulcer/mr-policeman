import React from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import RegisterForm from '@/components/RegisterForm';
import { router } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

const RegisterScreen = () => {
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
