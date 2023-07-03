import apiRoutes from '@/services/constants/apiRoutes';
import { api } from '@/services/settings/axios';
import forceTypeReturn from '@/utils/forceTypeReturn';
import { AxiosError } from 'axios';

import constants from '../constants';
import {
  type IResponseFetchCreateProject,
  type IFormCreateProject,
  type IResponseGetProject
} from './types';

const createProject = async (
  project: IFormCreateProject
): Promise<IResponseGetProject> => {
  try {
    const { data } = await api.post<IResponseFetchCreateProject>(
      apiRoutes.private.CREATE_PROJECT,
      forceTypeReturn<IFormCreateProject>(project),
      {
        withCredentials: true
      }
    );
    return {
      message: data.message,
      created: true
    };
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return {
        message:
          error.response?.data?.message ??
          constants.error.GENERIC_ERROR_CREATING_PROJECT,
        created: false
      };
    }
    return {
      message: constants.error.GENERIC_ERROR_CREATING_PROJECT,
      created: false
    };
  }
};

export default createProject;
