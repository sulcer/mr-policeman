import React, { FC, useEffect, useState } from 'react';
import { View, Switch } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface ToggleSwitchProps {
  children?: React.ReactNode;
  classNameContainer?: string;
  action?: () => void;
}

const Toggle: FC<ToggleSwitchProps> = ({
  children,
  classNameContainer,
  action,
}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  useEffect(() => {
    if (action) {
      action();
    }
  }, [isEnabled]);

  return (
    <View
      className={twMerge(
        'flex flex-row items-center justify-between',
        classNameContainer
      )}
    >
      <View>{children}</View>
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

export default Toggle;
