import { type IRepository } from '@/types/repository';

export interface IFetchGetRepositories {
  repositories: IRepository[] | null;
  message: string;
}
