import { create } from 'zustand';

import { type IStates, type IActions } from './types';
import createDataDashboard from './utils/createDataDashboard';

const useProjectsStore = create<IStates & IActions>((set) => ({
  projects: undefined,
  dataDashboard: undefined,

  setProjects: (projects) => {
    set({
      projects,
      dataDashboard: projects ? createDataDashboard(projects) : null
    });
  },
  deleteProject: (idProject) => {
    set((state) => {
      const { projects } = state;
      if (projects) {
        return {
          projects: projects.filter((project) => project._id !== idProject)
        };
      }
      return {
        projects
      };
    });
  },
  setDataDashboard: (projects) => {
    set({
      dataDashboard: projects ? createDataDashboard(projects) : null
    });
  }
}));

export default useProjectsStore;
