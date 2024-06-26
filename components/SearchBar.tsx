import React, { FC } from 'react';
import { View } from 'react-native';
import Input from '@/components/Input';
import Ionicons from '@expo/vector-icons/Ionicons';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit?: () => void;
}

const SearchBar = ({ value, onChangeText, onSubmit }: SearchBarProps) => {


  return (
    <View className={'absolute z-10 mt-16 w-full'}>
      <View
        className={
          'flex flex-row items-center mx-6 bg-gray-100 rounded-md px-3'
        }
      >
        <Ionicons name={'search-outline'} size={18} color={'#A1A1AA'} onPress={onSubmit} />
        <Input
          placeholder={'Search'}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

export default SearchBar;
