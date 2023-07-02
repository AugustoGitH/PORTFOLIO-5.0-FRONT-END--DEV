import apiRoutes from '@/services/constants/apiRoutes';
import { api } from '@/services/settings/axios';
import { AxiosError } from 'axios';

import constants from './constants';
import {
  type IResponseFetchGetProjects,
  type IServiceGetProjects
} from './types';

const getProjects = async (): Promise<IServiceGetProjects> => {
  try {
    const { data } = await api.get<IResponseFetchGetProjects>(
      apiRoutes.public.GET_PROJECTS,
      {
        withCredentials: true
      }
    );
    return {
      message: data.message,
      projects: data.projects,
      projectsSought: true
    };
  } catch (error: unknown) {
    console.error(error);
    throw new Error(constants.GENERIC_ERROR_MESSAGE_GET_PROJECTS);
    // if (error instanceof AxiosError) {
    //   return {
    //     message:
    //       error.response?.data?.message ??
    //       constants.GENERIC_ERROR_MESSAGE_GET_PROJECTS,
    //     projects: null,
    //     projectsSought: false
    //   };
    // }
    // return {
    //   message: constants.GENERIC_ERROR_MESSAGE_GET_PROJECTS,
    //   projects: null,
    //   projectsSought: false
    // };
  }
};

export default getProjects;
