import React from 'react';
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
import { getGeoLocation } from '@/api/geoLocation';
import { useControls, useCreateControl } from '@/api/controls';
import * as Location from 'expo-location';


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

    const controls = useControls({
      enabled: false,
    });

    const createControl = useCreateControl({
      onSuccess: async () => {
        await controls.refetch();
      },
    });

    const onSubmit = async (data: ControlType) => {
      if (data.location) {
        const geo = await getGeoLocation(data.location);
        const dto = {
          name: data.name,
          latitude: geo?.lat as number,
          longitude: geo?.lon as number,
          description: data.description,
        };
        await createControl.mutateAsync(dto);
      } else {
        const location = await Location.getCurrentPositionAsync({});
        await createControl.mutateAsync({
          name: data.name,
          description: data.description,
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      }

      form.reset(DefaultControlData);
      router.navigate('home');
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
              onPress={() => onSubmit(form.getValues())}
            />
          </FormProvider>
        </View>
      </View>
    );
  }
;

export default AddControlForm;
