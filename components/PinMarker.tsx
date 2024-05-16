import React, { FC } from 'react';
import { Pressable, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import BottomDrawer from '@/components/BottomDrawer';
import Control from '@/components/Control';

// TODO: needs to change based on map provider!
const PinMarker: FC = () => {
  return (
    <View className={'absolute z-10'}>
      <Pressable
        className={'mt-10 w-10 h-10 rounded-full items-center justify-center'}
      >
        <BottomDrawer
          children={
            <Ionicons name={'location-outline'} size={15} color={'black'} />
          }
          content={<Control />}
        />
      </Pressable>
    </View>
  );
};

export default PinMarker;
