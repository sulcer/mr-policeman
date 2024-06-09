import React, { useEffect, useState } from 'react';
import { View, Alert } from 'react-native';
import Navbar from '@/components/nav/Navbar';
import SearchBar from '@/components/SearchBar';
import Map from '@/components/Map';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as geolib from 'geolib';
import Toast from 'react-native-toast-message';
import { getGeoLocation } from '@/api/geoLocation';

const Home = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null,
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
          },
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
      // TODO:  check if any control is near
      const distance = geolib.getDistance(
        {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
        { latitude: 46.6048288, longitude: 15.7869497 },
      );

      console.log('Distance:', distance);
      console.log(location.coords.latitude, location.coords.longitude);

      if (distance < 5000) {
        Toast.show({
          type: 'error',
          text1: 'You are near a control! 👮🏽‍️',
          text2: 'Drive carefully!',
        });
      }
    }
  }, [location]);

  useEffect(() => {
    if (location) {
      saveUsersLocation();
    }
  }, [location]);

  const [search, setSearch] = useState('');
  const [mapLocation, setMapLocation] = useState<{ lat: number, lon: number }>();

  const onSubmitSearch = async () => {
    const geo = await getGeoLocation(search);
    setMapLocation({ lat: geo.lat, lon: geo.lon });
  };

  return (
    <View className={'flex-1 w-full relative'}>
      <SearchBar onSubmit={onSubmitSearch} value={search} onChangeText={setSearch} />
      <Navbar />
      <Map location={mapLocation} />
    </View>
  );
};

export default Home;
