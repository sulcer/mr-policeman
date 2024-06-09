import { apiInstance } from '@/api/axios';
import { QueryClient, useMutation, UseMutationOptions, useQuery, useQueryClient } from '@tanstack/react-query';

export type Control = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  description: string;
  upVotes: number;
  downVotes: number;
  createdAt: string;
}

export type CreateControlDto = {
  name: string;
  latitude: number;
  longitude: number;
  description: string;
}

const getControls = async () => {
  const res = await apiInstance.get('/controls');
  return res.data as Control[];
};


const createControl = async (control: CreateControlDto) => {
  const res = await apiInstance.post('/controls', control);
  return res.data;
};

export const upVoteControl = async (id: string) => {
  const res = await apiInstance.put(`/controls/${id}/upvote`);
  return res.data;
};

export const downVoteControl = async (id: string) => {
  const res = await apiInstance.put(`/controls/${id}/downvote`);
  return res.data;
};


export const useControls = () => {
  return useQuery({
    initialData: [],
    queryKey: ['controls'],
    queryFn: getControls,
  });
};

export const useCreateControl = () => {
  return useMutation({
    mutationKey: ['create-control'],
    mutationFn: createControl,
  });
};

export const useUpVoteControl = (opts?: UseMutationOptions<any, Error, string, unknown>) => {
  return useMutation({
    mutationKey: ['upvote-control'],
    mutationFn: upVoteControl,
    ...opts,
  });
};

export const useDownVoteControl = (opts?: UseMutationOptions<any, Error, string, unknown>) => {
  return useMutation({
    mutationKey: ['downvote-control'],
    mutationFn: downVoteControl,
    ...opts,

  });
};

