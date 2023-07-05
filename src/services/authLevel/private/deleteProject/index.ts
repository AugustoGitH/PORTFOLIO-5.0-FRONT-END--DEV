import { api } from '@/services/settings/axios';
import { AxiosError } from 'axios';

import apiRoutes from '../../../constants/apiRoutes';
import constants from '../constants';
import { type IResponseFetchDeleteProject } from './types';

const deleteProject = async (
  idProject: string
): Promise<IResponseFetchDeleteProject> => {
  try {
    const { data } = await api.delete<IResponseFetchDeleteProject>(
      `${apiRoutes.private.DELETE_PROJECT}/${idProject}`,
      {
        withCredentials: true
      }
    );

    return {
      message: data.message,
      deleted: true
    };
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return {
        message:
          error.response?.data?.message ??
          constants.error.GENERIC_ERROR_DELETE_PROJECT,
        deleted: false
      };
    }
    return {
      message: constants.error.GENERIC_ERROR_DELETE_PROJECT,
      deleted: false
    };
  }
};

export default deleteProject;
