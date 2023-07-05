import { type IProjectPrivate } from '@/types/Project';
import orderPresentationOfProjects from '@/utils/project/orderPresentationOfProjects';
import { create } from 'zustand';

import constants from './constants';
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
  addProject: (project) => {
    set((state) => {
      const { projects } = state;
      if (projects) {
        // const projectsOrdened =
        //   orderPresentationOfProjects<IProjectPrivate>(projects);

        const projectsOfFive = projects.filter(
          (project) => project.orderOfFive
        );

        const projectsNotOfFive = projects.filter(
          (project) => !project.orderOfFive
        );

        const projectsOrdened = orderPresentationOfProjects<IProjectPrivate>([
          ...projectsOfFive,
          project,
          ...projectsNotOfFive
        ]);

        return {
          projects: projectsOrdened,
          dataDashboard: createDataDashboard(projectsOrdened)
        };
      }
      return {};
    });
  },
  deleteProject: (idProject) => {
    set((state) => {
      const { projects } = state;
      if (projects) {
        const projectsNotExclude = projects.filter(
          (project) => project._id !== idProject
        );
        return {
          projects: projectsNotExclude,
          dataDashboard: createDataDashboard(projectsNotExclude)
        };
      }
      return {};
    });
  },
  setDataDashboard: (projects) => {
    set({
      dataDashboard: projects ? createDataDashboard(projects) : null
    });
  },
  updateProject: (idProject, fieldsEdit) => {
    set((state) => {
      const { projects } = state;
      if (!projects) {
        throw new Error(constants.error.ERROR_UPDATE_DOM_PROJECT_PRE_LOADING);
      }
      const projectSelected = projects.find(
        (project) => project._id === idProject
      );

      if (!projectSelected) {
        throw new Error(constants.error.ERROR_UPDATE_DOM_PROJECT_NOT_FOUNDED);
      }

      const newProjectEdited = Object.assign(projectSelected, fieldsEdit);

      const projectCopy = projects.slice();

      const idsProject = projectCopy.map((project) => project._id);

      projectCopy.splice(idsProject.indexOf(idProject), 1, newProjectEdited);

      return {
        projects: projectCopy
      };
    });
  }
}));

export default useProjectsStore;
