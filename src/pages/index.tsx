import { useEffect } from 'react';

import getProjectsService from '@/services/authLevel/public/getProjects';
import useProjectsStore from '@/stores/project/public/useProjects';
import HomeTemplate from '@/templates/Home';
import { type IProjectPublic } from '@/types/Project';

import { type InferGetServerSidePropsType, type GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps<{ projects: IProjectPublic[] | null }> = async () => {
  const { projects } = await getProjectsService()
  return {
    props: {
      projects
    }
  }
}



const Home = ({ projects }: InferGetServerSidePropsType<typeof getStaticProps>): JSX.Element => {
  const setProjects = useProjectsStore(state => state.setProjects)

  useEffect(() => {
    setProjects(projects)
  }, [projects, setProjects])

  return <HomeTemplate />
};


export default Home;
