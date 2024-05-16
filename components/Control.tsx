import React from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Control = () => {
  return (
    <View className="flex-1 w-full">
      <View className="px-5 flex flex-col gap-y-16">
        <View>
          <Text className={'text-xl font-bold dark:text-white'}>
            Jurovski Dol
          </Text>
          <Text className={'text-gray-500 text-base'}>Pri Hugeji</Text>
          <Text className={'text-gray-500 text-base'}>16.5.2024 14:00</Text>
        </View>

        <Text>Radar in kontrola alkohola!</Text>

        <View className={'flex flex-row justify-between mx-5'}>
          <View>
            <Pressable
              className={
                'w-12 h-12 rounded-full bg-navy-blue items-center justify-center'
              }
            >
              <TouchableOpacity
                onPress={() => console.log('up')}
                className={'p-3'}
              >
                <Ionicons name={'arrow-up-outline'} size={24} color={'white'} />
              </TouchableOpacity>
            </Pressable>
            <Text
              className={'text-black dark:text-white text-center mt-1 text-xl'}
            >
              10
            </Text>
          </View>

          <View>
            <Pressable
              className={
                'w-12 h-12 rounded-full bg-navy-blue items-center justify-center'
              }
            >
              <TouchableOpacity
                onPress={() => console.log('home')}
                className={'p-3'}
              >
                <Ionicons
                  name={'arrow-down-outline'}
                  size={24}
                  color={'white'}
                />
              </TouchableOpacity>
            </Pressable>
            <Text
              className={'text-black dark:text-white text-center mt-1 text-xl'}
            >
              0
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Control;
