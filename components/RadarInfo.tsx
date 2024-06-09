import React from 'react';
import { Radar } from '@/api/radars';
import { Image, Text, View } from 'react-native';
import RadarImage from '@/assets/images/radar.png';

interface RadarInfoProps {
  radar: Radar;
}

const RadarInfo = ({ radar }: RadarInfoProps) => {
  return (
    <View className="flex-1 w-full">
      <View className="px-5 flex flex-col gap-y-16">
        <View>
          <Text className={'text-lg font-semibold dark:text-white'}>
            {radar.description}
          </Text>
          <View className={'flex flex-col items-center gap-4'}>
            <Image source={RadarImage} style={{ width: 300, height: 300 }} />
            <Text className={'text-gray-500 font-bold text-base'}>{radar.speedLimit} KM/h</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RadarInfo;