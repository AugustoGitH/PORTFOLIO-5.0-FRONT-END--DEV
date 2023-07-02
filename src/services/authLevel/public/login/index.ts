import { type IFormLogin } from '@/schemas/form/login/types';
import apiRoutes from '@/services/constants/apiRoutes';
import { api } from '@/services/settings/axios';
import { AxiosError } from 'axios';

import constants from './constants';
import { type IResponseFetchLogin, type IServiceLogin } from './types';

const login = async (form: IFormLogin): Promise<IServiceLogin> => {
  try {
    const { data } = await api.post<IResponseFetchLogin>(
      apiRoutes.public.LOGIN,
      form,
      {
        withCredentials: true
      }
    );
    return {
      message: data.message,
      isLogged: true
    };
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return {
        message:
          error.response?.data?.message ??
          constants.GENERIC_ERROR_MESSAGE_GET_PROJECTS,
        isLogged: false
      };
    }
    return {
      message: constants.GENERIC_ERROR_MESSAGE_GET_PROJECTS,
      isLogged: false
    };
  }
};

export default login;
