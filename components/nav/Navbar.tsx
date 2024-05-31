import React, { FC, useState } from 'react';
import { Pressable, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import BottomDrawer from '@/components/BottomDrawer';
import AddControlForm from '@/components/AddControlForm';

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);


  const onChange = (b: boolean) => setIsOpen(b)

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
      >
        <TouchableOpacity
          onPress={() => router.navigate('settings')}
          className={'p-3'}
        >
          <Ionicons name={'settings-outline'} size={24} color={'white'} />
        </TouchableOpacity>
      </Pressable>
      <Pressable
        className={
          'w-12 h-12 rounded-full bg-navy-blue items-center justify-center'
        }
      >
        <BottomDrawer
          open={isOpen}
          handleChange={onChange}
          children={<Ionicons name={'add-outline'} size={24} color={'white'} />}
          content={<AddControlForm />}
        />
      </Pressable>
    </View>
  );
};

export default Navbar;
