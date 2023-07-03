
import { useEffect } from "react";

import PageNotFound from "@/patterns/PageNotFound";
import getProjectsService from "@/services/authLevel/private/getProjects";
import verifyCredentialsService from "@/services/authLevel/public/verifyCredentials"
import useProjectsStore from "@/stores/project/private/useProjects";
import PainelTemplate from "@/templates/Painel"
import { type IProjectPrivate } from "@/types/Project";

import { type InferGetServerSidePropsType, type GetServerSideProps } from "next"



export const getServerSideProps: GetServerSideProps<{ isAuthenticated: boolean, projects: IProjectPrivate[] | null }> = async (context) => {
  const token = context.req.cookies[process.env.TOKEN_AUTHORIZATION ?? ""]
  try {
    const [{ isAuthenticated }, { projects }] = await Promise.all([
      verifyCredentialsService(token),
      getProjectsService(token)
    ])

    return {
      props: {
        isAuthenticated,
        projects
      }
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        isAuthenticated: false,
        projects: null
      }
    };
  }
};


const Painel = ({ isAuthenticated, projects }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {
  const setProjects = useProjectsStore(state => state.setProjects)

  useEffect(() => {
    setProjects(projects)
  }, [projects, setProjects])


  return (
    isAuthenticated ? <PainelTemplate /> : <PageNotFound />
  )
}


export default Painel