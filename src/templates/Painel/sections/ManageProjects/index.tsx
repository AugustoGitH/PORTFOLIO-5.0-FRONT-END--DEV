import useProjectsStore from "@/stores/project/private/useProjects"
import { type IProjectPrivate } from "@/types/Project"
import orderPresentationOfProjects from "@/utils/project/orderPresentationOfProjects"

import Project from "./components/Project"
import * as S from "./styles"


const ManageProjects = (): JSX.Element => {
  const projects = useProjectsStore(state => state.projects)
  return (
    <S.ManageProjects>
      <h2>Gerenciar seus projetos</h2>
      <ul className="projects">
        {

        }
        {
          projects && orderPresentationOfProjects<IProjectPrivate>(projects).map(project => (
            <Project key={project._id} project={project} />
          ))
        }
      </ul>
    </S.ManageProjects>
  )
}

export default ManageProjects