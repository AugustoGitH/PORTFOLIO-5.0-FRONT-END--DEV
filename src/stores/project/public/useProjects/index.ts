import { type TProjectType, type IProjectPublic } from '@/types/Project';
import { create } from 'zustand';

import { type IActions, type IStates } from './types';

const useProjectsStore = create<IActions & IStates>((set) => ({
  projects: [],
  canvasProjects: [],
  setProjects: (projects: IProjectPublic[] | null) => {
    set((state) => ({
      ...state,
      canvasProjects: projects ?? [],
      projects
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
