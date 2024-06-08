import React, { useState } from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import ChangePasswordForm from '@/components/ChangePasswordForm';
import Toggle from '@/components/Toggle';
import Button from '@/components/Button';
import { router } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { useSession } from '@/hooks/useSession';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings = () => {
  const session = useSession();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const logOut = async () => {
    session.logout();
    router.navigate('login');
  };

  const toggleNotifications = async () => {
    try {
      const newValue = !notificationsEnabled;
      setNotificationsEnabled(newValue);
      await AsyncStorage.setItem('notifications', newValue.toString());
      Toast.show({
        type: 'info',
        text1: 'Info',
        text2: newValue ? 'Notifications enabled' : 'Notifications disabled',
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View className={'flex flex-col h-full pt-14 pb-8'}>
      <View className={'flex-1'}>
        <View className={'px-5'}>
          <View className={'flex flex-col'}>
            <Pressable className={'w-12 h-12'}>
              <TouchableOpacity onPress={() => router.navigate('home')}>
                <AntDesign name="arrowleft" size={24} color="black" />
              </TouchableOpacity>
            </Pressable>
          </View>
          <Text className={'text-3xl font-bold dark:text-white'}>Settings</Text>
          <Text className={'dark:text-white'}>Change your preferences</Text>
        </View>
        <View className={'px-5 mt-5'}>
          <Text className={'text-xl font-bold dark:text-white'}>User</Text>
          <Text className={'text-gray-500'}>Change password</Text>
        </View>
        <View className={'h-60'}>
          <ChangePasswordForm />
        </View>
        <Toggle
          action={toggleNotifications}
          children={
            <>
              <Text className={'text-xl font-bold dark:text-white'}>
                Notifications
              </Text>
              <Text className={'text-gray-500'}>Enable push notifications</Text>
            </>
          }
          classNameContainer={'mx-5'}
        />
      </View>

      <View className={'px-5'}>
        <Button classname="bg-red-600 mt-5" text={'Log Out'} onPress={logOut} />
      </View>
    </View>
  );
};

export default Settings;
