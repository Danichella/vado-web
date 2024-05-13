import axios from '@/helpers/axiosInit';
import { useAuth } from './useAuth';

interface IGetProps {
  url: string;
  query_params?: object;
}

interface IPostProps {
  url: string;
  body: object;
}

export const useApi = async () => {
  const { getAuthToken } = useAuth();

  axios.defaults.headers.common['Authorization'] = await getAuthToken();

  const get = async ({ url, query_params = {} }: IGetProps) =>
    axios.get(url, {
      params: query_params,
    });

  const post = async ({ url, body = {} }: IPostProps) => axios.post(url, body);

  return {
    get,
    post,
  };
};
