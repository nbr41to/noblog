import axios from 'axios';

export const getFetcher = async (url: string) => {
  const response = await axios.get(url);

  return response.data;
};
