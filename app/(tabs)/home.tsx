import React from 'react';
import { Image, View } from 'react-native';
import Navbar from '@/components/nav/Navbar';
import Map from '@/assets/images/map.png';

const Home = () => {
  return (
    <View className={'flex-1 w-full relative'}>
      <Image source={Map} />
      <Navbar />
    </View>
  );
};

export default Home;
