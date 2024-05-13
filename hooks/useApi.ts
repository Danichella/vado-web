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

export const useApi = () => {
  const { getAuthToken } = useAuth();

  const getHeaders = async () => ({
    Authorization: await getAuthToken(),
  });

  const errorHandler = (error: any) => console.log(error.response);

  const get = async ({ url, query_params = {} }: IGetProps) =>
    axios
      .get(`/api/v1/${url}`, {
        params: query_params,
        headers: await getHeaders(),
      })
      .then((response) => response.data)
      .catch(errorHandler);

  const post = async ({ url, body = {} }: IPostProps) =>
    axios
      .post(`/api/v1/${url}`, body, { headers: await getHeaders() })
      .then((response) => response.data)
      .catch(errorHandler);

  return {
    get,
    post,
  };
};
