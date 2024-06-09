import axios from 'axios';

export const getGeoLocation = async (location: string) => {
  const url = (process.env.EXPO_PUBLIC_GEO_API_URL as string).replace('{location}', location);
  const res = await axios.get(url);
  return res.data[0] as { lat: number; lon: number, name: string, country: string };
};

