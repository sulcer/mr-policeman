import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveItem = async <T>(key: string, item: T): Promise<void> => {
  try {
    const json = JSON.stringify(item);
    await AsyncStorage.setItem(key, json);
  } catch (e) {
    console.error('Failed to save item to database');
  }
};

export const getItem = async <T>(key: string): Promise<T | undefined> => {
  try {
    const item = await AsyncStorage.getItem(key);
    if (!item) return undefined;
    return JSON.parse(item);
  } catch (e) {
    console.error('Failed to retrieve item from database');
  }
};

export const deleteItem = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error('Failed to delete item from database');
  }
};