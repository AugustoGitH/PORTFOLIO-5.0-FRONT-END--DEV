import {
  type TProjectTechnologiesUsed,
  type IProjectImages,
  type TProjectType
} from '@/types/Project';

export interface IFormCreateProject {
  type: TProjectType;
  images: IProjectImages;
  name: string;
  websiteLink: string;
  videoLink: string;
  repoId: number;
  repoLink: string;
  technologiesUsed: TProjectTechnologiesUsed[];
}

export interface IResponseFetchCreateProject {
  message: string;
}

export interface IResponseGetProject extends IResponseFetchCreateProject {
  created: boolean;
}
