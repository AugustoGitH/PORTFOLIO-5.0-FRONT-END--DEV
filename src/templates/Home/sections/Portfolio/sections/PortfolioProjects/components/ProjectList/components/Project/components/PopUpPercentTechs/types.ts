import { type ITechIcon } from '@/settings/techsWhiteListIcon/types';
import { type IRepositoryTechnologiesPoints } from '@/types/Project';

export interface IBarTechnologieProps {
  tech: string;
  percent: number;
  order: number;
  listIcons: ITechIcon[];
}

export interface IPopUpPercentTechsProps {
  percents: IRepositoryTechnologiesPoints;
  show: boolean;
  technologies: string[];
  onClose: () => void;
}
