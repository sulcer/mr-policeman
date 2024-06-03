import { deleteItem, getItem, saveItem } from './db';
import { Session } from '@/api/auth';

const USER_KEY = 'user';

export const setUser = async (user: Session): Promise<void> => {
  return await saveItem<Session>(USER_KEY, user);
};

export const getUser = async (): Promise<Session | undefined> => {
  return await getItem<Session>(USER_KEY);
};

export const removeUser = async (): Promise<void> => {
  return await deleteItem(USER_KEY);
};