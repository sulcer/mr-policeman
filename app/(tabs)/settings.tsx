import React from 'react';
import { Text, View } from 'react-native';
import ChangePasswordForm from '@/components/ChangePasswordForm';
import NotificationsSettings from '@/components/NotificationsSettings';
import Button from '@/components/Button';

const Settings = () => {
  return (
    <View className={'flex flex-col h-full pt-32 pb-8'}>
      <View className={'flex-1'}>
        <View className={'px-5'}>
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
        <NotificationsSettings />
      </View>

      <View className={'px-5'}>
        <Button
          classname="bg-red-600 mt-5"
          text={'Delete Account'}
          onPress={() => console.log('Delete account!')}
        />
      </View>
    </View>
  );
};

export default Settings;
