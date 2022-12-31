import axios from 'axios';

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
