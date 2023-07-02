import { type TProjectType, type IProjectPublic } from '@/types/Project';

export interface IStates {
  projects: IProjectPublic[] | null | undefined;
  canvasProjects: IProjectPublic[];
  statesShowPercentageTechs: IStatesShowPercentageTechs;
}

export interface IActions {
  setProjects: (projects: IProjectPublic[] | null) => void;
  filterProjectsOnCanvas: (type: TProjectType) => void;
  editStatesShowPercentageTechs: (
    statesPercentage: (
      prevStates: IStatesShowPercentageTechs
    ) => IStatesShowPercentageTechs
  ) => void;
}

export interface IStatesShowPercentageTechs extends Record<string, boolean> {}
