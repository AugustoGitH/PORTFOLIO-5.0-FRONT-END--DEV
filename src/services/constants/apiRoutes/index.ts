import { type TRoutesProjectPrivate, type TRoutesProjectPublic } from './types';
import assignRoutes from './utils';

const apiRoutes = {
  public: {
    ...assignRoutes<Record<TRoutesProjectPublic, string>>('/project/public', {
      GET_PROJECTS: '/get-projects',
      LIKE_PROJECT: '/like-project',
      VIEW_PROJECT: '/:idProject'
    })
  },
  private: {
    ...assignRoutes<Record<TRoutesProjectPrivate, string>>(
      '/project/private/',
      {
        GET_PROJECTS: '/get-projects',
        GET_REPOSITORIES: '/get-repos  ',
        DELETE_PROJECT: '/delete-project',
        CREATE_PROJECT: '/create-project',
        RELOAD_REPO_PROJECT: '/reload-repo-project',
        UPDATE_PROJECT: '/update-project'
      }
    )
  }
};

console.log(apiRoutes);

export default apiRoutes;
