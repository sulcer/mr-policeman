import React, { FC } from 'react';
import { Pressable, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

const Navbar: FC = () => {
  return (
    <View
      className={
        'flex flex-row justify-between w-full px-8 absolute z-10 bottom-0 mb-10'
      }
    >
      <Pressable
        className={
          'w-12 h-12 rounded-full bg-gray-400 items-center justify-center'
        }
        onPress={() => router.navigate('settings')}
      >
        <Ionicons name={'settings-outline'} size={24} color={'white'} />
      </Pressable>
      <Pressable
        className={
          'w-12 h-12 rounded-full bg-navy-blue items-center justify-center'
        }
        onPress={() => console.log('Add button pressed')}
      >
        <Ionicons name={'add-outline'} size={24} color={'white'} />
      </Pressable>
    </View>
  );
};

export default Navbar;
