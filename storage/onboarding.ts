import AsyncStorage from '@react-native-async-storage/async-storage';

export const isOnboardingComplete = async () => {
  const onboarding = await AsyncStorage.getItem('onboarding');
  return onboarding === 'true';
};

export const setOnboardingComplete = async () => {
  await AsyncStorage.setItem('onboarding', 'true');
};