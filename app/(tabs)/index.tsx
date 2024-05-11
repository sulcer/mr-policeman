import {View, Text} from 'react-native';
import {ThemedView} from "@/components/ThemedView";

export default function HomeScreen() {
  return (
      <View className={'flex-1 justify-center items-center'}>
          <Text className={'text-gray-500'}>Home Screen</Text>
      </View>
  );
}