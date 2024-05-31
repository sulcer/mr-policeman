import React, { FC, useState } from 'react';
import { Pressable } from 'react-native';
import BottomDrawer from '@/components/BottomDrawer';
import Control from '@/components/Control';
import { Marker } from 'react-native-maps';

// TODO: needs to change based on map provider!
const PinMarker: FC = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <Pressable
      className={'mt-10 w-10 h-10 rounded-full items-center justify-center'}
    >
      <BottomDrawer
        open={isOpen}
        handleChange={setIsOpen}
        children={
          <Marker coordinate={{ latitude: 46, longitude: 15 }} onPress={() => setIsOpen(true)} />
        }
        content={
          <Control
            name={'Pri Hugeji'}
            location={'Jurovski Dol'}
            date={'16.5.2024'}
            description={'Radar in kontrola alkohola!'}
            type={'radar'}
            upVotes={10}
            downVotes={0}
          />
        }
      />
    </Pressable>

  );
};

export default PinMarker;
