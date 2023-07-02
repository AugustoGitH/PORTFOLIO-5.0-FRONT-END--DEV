
import verifyCredentialsService from "@/services/authLevel/public/verifyCredentials"
import PainelTemplate from "@/templates/Painel"

import { type InferGetServerSidePropsType, type GetServerSideProps } from "next"



export const getServerSideProps: GetServerSideProps<{ isAuthenticated: boolean }> = async (context) => {
  const token = context.req.cookies[process.env.TOKEN_AUTHORIZATION ?? ""]
  try {
    const { isAuthenticated } = await verifyCredentialsService(token);

    return {
      props: {
        isAuthenticated
      }
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        isAuthenticated: false
      }
    };
  }
};

const Painel = ({ isAuthenticated }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {
  return (
    isAuthenticated ? <PainelTemplate /> : <h1>Não permitido</h1>
  )
}


export default Painel