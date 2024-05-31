import React from 'react';
import {  View } from 'react-native';
import Navbar from '@/components/nav/Navbar';
import SearchBar from '@/components/SearchBar';
import Map from '@/components/Map';

const Home = () => {
  return (
    <View className={'flex-1 w-full relative'}>
      <SearchBar />
      {/*<PinMarker />*/}
      <Navbar />
      <Map/>
    </View>
  );
};

export default Home;
