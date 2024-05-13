import { View, Text } from 'react-native';
import { useEffect } from 'react';
import { router } from 'expo-router';

const LandingScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      router.replace('/login');
    }, 10000);
  }, []);

  return (
    <View className={'flex-1 justify-center items-center'}>
      <Text className={'text-gray-500'}>Landing Screen</Text>
    </View>
  );
};

export default LandingScreen;
