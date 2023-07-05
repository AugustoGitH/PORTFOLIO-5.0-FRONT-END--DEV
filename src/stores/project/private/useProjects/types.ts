import { type IProjectEditabled } from '@/hooks/project/private/useEditProject/types';
import { type IProjectPrivate } from '@/types/Project';

export interface IDashboardData {
  likes: number | '***';
  views: number | '***';
  completedProjects: number | '***';
  devlopmentProjects: number | '***';
  ladingPages: number | '***';
  webApps: number | '***';
  ecommerces: number | '***';
}

export interface IStates {
  projects: IProjectPrivate[] | undefined | null;
  dataDashboard: IDashboardData | undefined | null;
}

export interface IActions {
  setProjects: (projects: IProjectPrivate[] | null) => void;
  deleteProject: (idProject: string) => void;
  setDataDashboard: (projects: IProjectPrivate[] | null) => void;
  addProject: (project: IProjectPrivate) => void;
  updateProject: (idProject: string, fieldsEdit: IProjectEditabled) => void;
}
