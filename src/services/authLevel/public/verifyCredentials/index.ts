import apiRoutes from '@/services/constants/apiRoutes';
import { api } from '@/services/settings/axios';

import {
  type IServiceVerifyCredentials,
  type IResponseFetchVerifyCredentials
} from './types';

const verifyCredentials = async (
  token?: string
): Promise<IServiceVerifyCredentials> => {
  const { data } = await api.get<IResponseFetchVerifyCredentials>(
    apiRoutes.public.VERIFY_CREDENTIALS,
    {
      withCredentials: true,
      ...(token && {
        headers: {
          Authorization: token
        }
      })
    }
  );
  return {
    message: data.message,
    isAuthenticated: data.isAuthenticated
  };
};

export default verifyCredentials;
