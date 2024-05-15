import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ControlType } from '@/types/control.types';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ControlSchema } from '@/schemas/control.schema';
import { ControlledInput } from '@/components/ControlledInput';
import FormError from '@/components/FormError';
import { router } from 'expo-router';
import Button from '@/components/Button';
import Toggle from '@/components/Toggle';
import Select from '@/components/Select';

const DefaultControlData: ControlType = {
  name: '',
  location: '',
  type: '',
  description: '',
};

const AddControlForm = () => {
  const form = useForm({
    resolver: zodResolver(ControlSchema),
    defaultValues: DefaultControlData,
  });

  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined
  );
  const values = ['Control', 'Gun Radar', 'Stationary Radar'];

  const handleSelect = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <View className="flex-1 w-full">
      <View className="px-5">
        <Text className={'text-xl font-bold dark:text-white text-center'}>
          New police control
        </Text>
        <FormProvider {...form}>
          <ControlledInput name="name" label="Name" keyboardType="default" />
          <ControlledInput
            name="location"
            label="Location"
            keyboardType="default"
            classNameContainer="mb-5"
          />
          <Select
            values={values}
            selectedValue={selectedValue}
            onSelect={handleSelect}
          />
          <ControlledInput
            name="description"
            label="Description"
            keyboardType="default"
            classNameContainer="mb-5"
            classNameInput={'pb-20'}
          />
          <Toggle
            children={
              <Text className={'text-gray-400'}>Use current location</Text>
            }
          />
          <FormError form={form} />
          <Button
            classname="bg-navy-blue mt-5"
            text={'Submit'}
            onPress={() => router.navigate('home')}
          />
        </FormProvider>
      </View>
    </View>
  );
};

export default AddControlForm;
