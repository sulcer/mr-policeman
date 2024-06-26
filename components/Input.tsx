import React, { FC } from 'react';
import { View, TextInput, TextInputProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface InputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  className?: string;
  classNameLabel?: string;
  classNameContainer?: string;
}
const Input: FC<InputProps> = ({
  value,
  onChangeText,
  className,
  classNameLabel,
  classNameContainer,
  ...props
}) => {
  return (
    <View className={twMerge('bg-transparent w-full', classNameContainer)}>
      <TextInput
        className={twMerge(
          'shadow-lg shadow-black rounded-md dark:bg-dark-element dark:text-white py-3 px-4',
          className
        )}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={'#A1A1AA'}
        {...props}
      />
    </View>
  );
};
export default Input;
