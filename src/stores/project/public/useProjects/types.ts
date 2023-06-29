import { type TProjectType, type IProjectPublic } from '@/types/Project';

export interface IStates {
  projects: IProjectPublic[] | null;
  canvasProjects: IProjectPublic[];
}

export interface IActions {
  setProjects: (projects: IProjectPublic[] | null) => void;
  filterProjectsOnCanvas: (type: TProjectType) => void;
}
