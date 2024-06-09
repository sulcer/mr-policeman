import { apiInstance } from '@/api/axios';
import { useQuery } from '@tanstack/react-query';

export type Radar = {
  id: string;
  description: string;
  latitude: number;
  longitude: number;
  speedLimit: number;
}


export const getRadars = async () => {
  const res = await apiInstance.get('/radars');
  return res.data as Radar[];
};


export const useRadars = () => {
  return useQuery({
    initialData: [],
    queryKey: ['radars'],
    queryFn: getRadars,
  });
};