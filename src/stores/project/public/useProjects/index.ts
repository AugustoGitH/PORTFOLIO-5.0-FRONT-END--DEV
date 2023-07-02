import { type TProjectType, type IProjectPublic } from '@/types/Project';
import { create } from 'zustand';

import {
  type IStatesShowPercentageTechs,
  type IActions,
  type IStates
} from './types';

const useProjectsStore = create<IActions & IStates>((set) => ({
  projects: undefined,
  canvasProjects: [],
  statesShowPercentageTechs: {},
  setProjects: (projects: IProjectPublic[] | null) => {
    set((state) => ({
      ...state,
      canvasProjects: projects ?? [],
      projects,
      statesShowPercentageTechs: projects
        ? Object.fromEntries(projects.map((project) => [project._id, false]))
        : {}
    }));
  },
  editStatesShowPercentageTechs: (
    statesPercentage: (
      prevStates: IStatesShowPercentageTechs
    ) => IStatesShowPercentageTechs
  ) => {
    set((state) => ({
      ...state,
      statesShowPercentageTechs: statesPercentage(
        state.statesShowPercentageTechs
      )
    }));
  },
  filterProjectsOnCanvas: (type: TProjectType) => {
    set((state) => {
      const filteredProjects =
        state.projects?.filter((project) => project.type === type) ?? [];
      return {
        ...state,
        canvasProjects: type === 'all' ? state.projects ?? [] : filteredProjects
      };
    });
  }
}));

export default useProjectsStore;
