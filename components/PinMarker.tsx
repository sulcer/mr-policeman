import React, {  ReactNode, useState } from 'react';
import { Pressable, Text, View, Image, ImageSourcePropType } from 'react-native';
import BottomDrawer from '@/components/BottomDrawer';
import { Marker } from 'react-native-maps';



interface PinMarkerProps {
  latitude: number;
  longitude: number;
  content: ReactNode;
  image: ImageSourcePropType;
}

const PinMarker = ({ latitude, longitude, content, image }: PinMarkerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Pressable
      className={'mt-10 w-10 h-10 rounded-full items-center justify-center'}
    >
      <BottomDrawer
        open={isOpen}
        handleChange={setIsOpen}
        children={
          <Marker
            coordinate={{ latitude: latitude, longitude: longitude }}
            onPress={() => setIsOpen(true)}
          >
            <View>
              <Image source={image} style={{ width: 40, height: 40 }} />
            </View>
          </Marker>
        }
        content={content}
      />
    </Pressable>
  );
};

export default PinMarker;
