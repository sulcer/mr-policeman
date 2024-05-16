import React, { FC } from 'react';
import { Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import IconWrapper from '@/components/IconWrapper';

interface ControlProps {
  name: string;
  location: string;
  date: string;
  type: string;
  description: string;
  upVotes: number;
  downVotes: number;
}

const Control: FC<ControlProps> = ({
  name,
  location,
  date,
  type,
  description,
  upVotes,
  downVotes,
}) => {
  return (
    <View className="flex-1 w-full">
      <View className="px-5 flex flex-col gap-y-16">
        <View>
          <Text className={'text-xl font-bold dark:text-white'}>
            {location}
          </Text>
          <Text className={'text-gray-500 text-base'}>{name}</Text>
          <Text className={'text-gray-500 text-base'}>{date}</Text>
        </View>

        <Text>{description}</Text>

        <View className={'flex flex-row justify-between mx-5'}>
          <View>
            <IconWrapper
              onPress={() => console.log('up')}
              classNameContainer={'w-12 h-12 bg-navy-blue'}
            >
              <Ionicons name={'arrow-up-outline'} size={24} color={'white'} />
            </IconWrapper>
            <Text
              className={'text-black dark:text-white text-center mt-1 text-xl'}
            >
              {upVotes}
            </Text>
          </View>
          <View>
            <IconWrapper
              onPress={() => console.log('down')}
              classNameContainer={'w-12 h-12 bg-navy-blue'}
            >
              <Ionicons name={'arrow-down-outline'} size={24} color={'white'} />
            </IconWrapper>
            <Text
              className={'text-black dark:text-white text-center mt-1 text-xl'}
            >
              {downVotes}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Control;
