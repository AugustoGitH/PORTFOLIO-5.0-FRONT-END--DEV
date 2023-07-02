

import Redirect from "@/components/Redirect";
import verifyCredentialsService from "@/services/authLevel/public/verifyCredentials"
import LoginTemplate from "@/templates/Login"

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



const Login = ({ isAuthenticated }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {
  return isAuthenticated ? <Redirect href="/painel" /> : <LoginTemplate />
}


export default Login