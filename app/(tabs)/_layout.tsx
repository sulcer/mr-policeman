import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: { display: 'none' },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Landing',
          href: null,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'play' : 'play-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          title: 'Login',
          href: null,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'log-in' : 'log-in-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="register"
        options={{
          title: 'Register',
          href: null,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'person-add' : 'person-add-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="onboarding"
        options={{
          title: 'Onboarding',
          href: null,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={
                focused ? 'ellipsis-horizontal' : 'ellipsis-horizontal-outline'
              }
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          href: null,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'home' : 'home-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          href: null,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'settings' : 'settings-outline'}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
