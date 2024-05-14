import React from 'react';
import { Text, View, Image } from 'react-native';
import stepOneOnboardingImage from '@/assets/images/first-onboarding.png';
import stepTwoOnboardingImage from '@/assets/images/second-onboarding.png';
import stepThreeOnboardingImage from '@/assets/images/third-onboarding.png';
import { useSwipe } from '@/hooks/useSwipe';
import Button from '@/components/Button';
import { router } from 'expo-router';

const onboardingSteps = [
  {
    title: 'Overview',
    description: 'Check for police control nearby',
    image: stepOneOnboardingImage,
  },
  {
    title: 'Share',
    description: 'Add the observed police control',
    image: stepTwoOnboardingImage,
  },
  {
    title: 'Be informed',
    description: 'Receive notifications about police controls near you',
    image: stepThreeOnboardingImage,
  },
];

const Onboarding = () => {
  const { onTouchStart, onTouchEnd } = useSwipe(onSwipeLeft, onSwipeRight, 6);
  const [step, setStep] = React.useState(0);

  function onSwipeLeft() {
    setStep((prevStep) => Math.min(prevStep + 1, 2));
  }

  function onSwipeRight() {
    setStep((prevStep) => Math.max(prevStep - 1, 0));
  }

  return (
    <View
      className={'flex-1 pt-52 items-center bg-white dark:bg-transparent'}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <Image
        source={onboardingSteps[step].image}
        className={'w-72 h-72 rounded-full'}
      />
      <View className={'flex items-center my-8 h-20 w-2/3'}>
        <Text className={'dark:text-white font-bold text-2xl'}>
          {onboardingSteps[step].title}
        </Text>
        <Text className={'dark:text-white text-base text-center'}>
          {onboardingSteps[step].description}
        </Text>
      </View>
      <View className={'flex flex-row gap-x-6'}>
        {onboardingSteps.map((i, index) => (
          <View
            key={index}
            className={`h-4 w-4 rounded-full ${
              index <= step ? 'bg-navy-blue' : 'bg-gray-300'
            }`}
          ></View>
        ))}
      </View>
      {step === 2 && (
        <View className={'w-24'}>
          <Button
            classname="bg-navy-blue mt-10"
            text={'Got it'}
            onPress={() => router.navigate('home')}
          />
        </View>
      )}
    </View>
  );
};

export default Onboarding;
