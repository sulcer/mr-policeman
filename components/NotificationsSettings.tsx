import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';

const NotificationsSettings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View className={'flex flex-row items-center justify-between mx-5'}>
      <View>
        <Text className={'text-xl font-bold dark:text-white'}>
          Notifications
        </Text>
        <Text className={'text-gray-500'}>Enable push notifications</Text>
      </View>
      <Switch
        trackColor={{ false: '#767577', true: '#6b7280' }}
        thumbColor={isEnabled ? '#103F78' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default NotificationsSettings;
