import React, { FC } from 'react';
import { Pressable, Text, View } from 'react-native';

interface SelectProps {
  values: string[];
  selectedValue?: string;
  onSelect?: (value: string) => void;
}

const Select: FC<SelectProps> = ({ values, selectedValue, onSelect }) => {
  return (
    <View className={'flex flex-row justify-between p-1'}>
      {values.map((value, index) => {
        return (
          <SelectItem
            value={value}
            key={index}
            isSelected={value === selectedValue}
            onSelect={onSelect ? () => onSelect(value) : undefined}
          />
        );
      })}
    </View>
  );
};

interface SelectItemProps {
  value: string;
  isSelected?: boolean;
  onSelect?: () => void;
}

const SelectItem: FC<SelectItemProps> = ({ value, onSelect, isSelected }) => {
  return (
    <Pressable
      onPress={onSelect}
      className={'flex flex-row justify-center items-center gap-x-1'}
    >
      <View
        className={`w-5 h-5 rounded-full border-gray-500 border-2 flex justify-center items-center`}
      >
        {isSelected && (
          <View className={`w-3 h-3 rounded-full bg-navy-blue`}></View>
        )}
      </View>
      <Text className={'text-gray-400'}>{value}</Text>
    </Pressable>
  );
};

export default Select;
