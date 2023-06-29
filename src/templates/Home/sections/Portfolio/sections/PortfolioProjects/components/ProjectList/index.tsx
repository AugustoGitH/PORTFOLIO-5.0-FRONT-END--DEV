import useProjectsStore from '@/stores/project/public/useProjects';

import Project from './components/Project';
import * as S from './styles';

const ProjectList = (): JSX.Element => {
  const canvasProjects = useProjectsStore(state => state.canvasProjects)
  return (
    <S.ProjectList>
      {
        canvasProjects.map(project => (
          <Project key={project._id} project={project} />
        ))
      }
    </S.ProjectList>
  );
};

export default ProjectList;
