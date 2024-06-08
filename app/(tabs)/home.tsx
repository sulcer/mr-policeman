import React, { useEffect, useState } from 'react';
import { View, Alert } from 'react-native';
import Navbar from '@/components/nav/Navbar';
import SearchBar from '@/components/SearchBar';
import Map from '@/components/Map';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      try {
        let initialLocation = await Location.getCurrentPositionAsync({});
        setLocation(initialLocation);

        let subscription = await Location.watchPositionAsync(
          { distanceInterval: 10 },
          (newLocation) => {
            setLocation(newLocation);
          }
        );

        return () => {
          if (subscription) {
            subscription.remove();
          }
        };
      } catch (error) {
        setErrorMsg('Error getting location');
      }
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const saveUsersLocation = async () => {
    await AsyncStorage.setItem('location', JSON.stringify(location));
  };

  useEffect(() => {
    if (location) {
      saveUsersLocation();
    }
  }, [location]);

  return (
    <View className={'flex-1 w-full relative'}>
      <SearchBar />
      <Navbar />
      <Map />
    </View>
  );
};

export default Home;
