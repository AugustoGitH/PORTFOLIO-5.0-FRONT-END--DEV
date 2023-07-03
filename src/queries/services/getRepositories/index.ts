import { useQuery, type UseQueryResult } from 'react-query';

import keysQuery from '@/queries/constants/keysQuery';
import { queryClient } from '@/queries/queryClient';
import apiRoutes from '@/services/constants/apiRoutes';
import { api } from '@/services/settings/axios';
import { type IRepository } from '@/types/repository';

import { type IFetchGetRepositories } from './types';

const getRepos = async (): Promise<IRepository[] | null> => {
  const { data } = await api.get<IFetchGetRepositories>(
    apiRoutes.private.GET_REPOSITORIES,
    {
      withCredentials: true
    }
  );
  return data.repositories ?? null;
};

const useFetchRepos = (): UseQueryResult<IRepository[] | null> => {
  return useQuery<IRepository[] | null>([keysQuery.REPOSITORIES], getRepos, {
    initialData: queryClient.getQueryData([keysQuery.REPOSITORIES]),
    staleTime: 100 * 60
  });
};

export default useFetchRepos;
