import axios from '@/helpers/axiosInit';
import { useAuth } from './useAuth';

interface IGetProps {
  url: string;
  query_params?: object;
}

interface IPostProps {
  url: string;
  body: object;
  headers?: object;
}

interface IPutProps {
  url: string;
  body: object;
}

export const useApi = () => {
  const { getAuthToken, deleteAuthToken } = useAuth();

  const getHeaders = async () => ({
    Authorization: await getAuthToken(),
  });

  const errorHandler = (error: any) => {
    if (error.request.status === 401) {
      deleteAuthToken();
    }

    console.error(error);
  };

  const get = async ({ url, query_params = {} }: IGetProps) =>
    axios
      .get(`/api/v1/${url}`, {
        params: query_params,
        headers: await getHeaders(),
      })
      .then((response) => response.data)
      .catch(errorHandler);

  const post = async ({
    url,
    body = {},
    headers = { 'Content-Type': 'application/json' },
  }: IPostProps) =>
    axios
      .post(`/api/v1/${url}`, body, {
        headers: { ...(await getHeaders()), ...headers },
      })
      .then((response) => response.data)
      .catch(errorHandler);

  const put = async ({ url, body = {} }: IPutProps) =>
    axios
      .put(`/api/v1/${url}`, body, { headers: await getHeaders() })
      .then((response) => response.data)
      .catch(errorHandler);

  return {
    get,
    post,
    put,
  };
};
