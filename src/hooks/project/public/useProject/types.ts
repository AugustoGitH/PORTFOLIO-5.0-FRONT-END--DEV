import { type IStatesShowPercentageTechs } from '@/stores/project/public/useProjects/types';

export interface IUseProject {
  likes: number;
  views: number;
  wasLiked: boolean;
  statesShowPercentageTechs: IStatesShowPercentageTechs;
  handleOpenPercentTechs: () => void;
  viewProject: () => void;
  likeProject: () => void;
  editStatesShowPercentageTechs: (
    statesPercentage: (
      prevStates: IStatesShowPercentageTechs
    ) => IStatesShowPercentageTechs
  ) => void;
}
