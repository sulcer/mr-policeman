import React, { FC } from 'react';
import { Pressable, TouchableOpacity } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface IconWrapperProps {
  children: React.ReactNode;
  classNameContainer?: string;
  onPress: () => void;
}

const IconWrapper: FC<IconWrapperProps> = ({
  children,
  classNameContainer,
  onPress,
}) => {
  return (
    <Pressable
      className={twMerge(
        'rounded-full items-center justify-center',
        classNameContainer
      )}
    >
      <TouchableOpacity onPress={onPress} className={'p-3'}>
        {children}
      </TouchableOpacity>
    </Pressable>
  );
};

export default IconWrapper;
