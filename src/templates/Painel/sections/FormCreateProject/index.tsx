import useCreateProject from "@/hooks/form/useCreateProject"

import InputDefault from "./components/InputDefault"
import InputSelectIdRepo from "./components/InputSelectIdRepo"
import * as S from "./styles"

const ManageProjects = (): JSX.Element => {
  const { registerForm } = useCreateProject()
  return (
    <S.ManageProjects>
      <form {...registerForm}> 
        <InputDefault {..regis}/>
      </form>
      <InputSelectIdRepo onChange={() => { console.log("Ola"); }} />
    </S.ManageProjects>
  )
}

export default ManageProjects