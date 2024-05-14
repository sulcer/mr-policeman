import React from 'react';
import { Image, View } from 'react-native';
import Navbar from '@/components/nav/Navbar';
import Map from '@/assets/images/map.png';
import SearchBar from '@/components/SearchBar';

const Home = () => {
  return (
    <View className={'flex-1 w-full relative'}>
      <Image source={Map} />
      <SearchBar />
      <Navbar />
    </View>
  );
};

export default Home;
