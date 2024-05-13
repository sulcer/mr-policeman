import { View, Text } from 'react-native';
import { useEffect, useRef } from 'react';
import { router } from 'expo-router';
import LottieView from 'lottie-react-native';

const LandingScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      router.replace('/login');
    }, 10000);
  }, []);

  return (
    <View className={'flex-1 justify-center items-center'}>
      <LottieView
        style={{ width: 250, height: 250 }}
        source={require('../../assets/lottie/police-animation.json')}
        autoPlay
        loop
      />
      <Text className={'text-black font-bold text-2xl dark:text-white'}>
        Mister Policeman
      </Text>
    </View>
  );
};

export default LandingScreen;
