import { showNotification } from '@mantine/notifications';
import axios from 'axios';

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    showNotification({
      title: 'Axios Response Error:',
      message: JSON.stringify(error),
      color: 'red',
    });
  }
);

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    showNotification({
      title: 'Axios Request Error:',
      message: JSON.stringify(error),
      color: 'pink',
    });
  }
);

export const getFetcher = async (url: string) => {
  const response = await axios.get(url);

  return response.data;
};

type PostFetcher = <T, U = any>(
  url: string,
  arg: {
    arg: T;
  }
) => Promise<U>;

export const postFetcher: PostFetcher = async (url, { arg }) => {
  const response = await axios.post(url, arg);

  return response.data;
};

type PatchFetcher = <T, U = any>(
  url: string,
  arg: {
    arg: T;
  }
) => Promise<U>;

export const patchFetcher: PatchFetcher = async (url, { arg }) => {
  const response = await axios.patch(url, arg);

  return response.data;
};
