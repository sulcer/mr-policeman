import { apiInstance } from '@/api/axios';

export type SettingsDto = {
  enabled: boolean;
};

const getNotificationSettingsByUser = async () => {
  const res = await apiInstance.get('/settings');
  return res.data as SettingsDto;
};

const updateNotificationSettings = async () => {
  const res = await apiInstance.put('/settings');
  return res.data;
};
