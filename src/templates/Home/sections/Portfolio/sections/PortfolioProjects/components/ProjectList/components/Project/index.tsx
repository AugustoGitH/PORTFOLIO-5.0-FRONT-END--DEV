
import LoaderDefault from '@/components/loaders/LoaderDefault';
import useProject from '@/hooks/project/public/useProject';
import { whiteListTechsUsedProject } from '@/schemas/form/settings';
import ImagesCover from '@/templates/Home/sections/Portfolio/sections/PortfolioProjects/components/ProjectList/components/Project/components/ImagesCover';

import PopUpPercentTechs from './components/PopUpPercentTechs';
import * as S from './styles';
import { type IProjectProps } from './types';

const Project = ({ project, order }: IProjectProps): JSX.Element => {
  const { likeProject, viewProject, likes, views, wasLiked, editStatesShowPercentageTechs, handleOpenPercentTechs, statesShowPercentageTechs, lodingLike } = useProject(project)
  return (
    <S.Project className="project" order={order}>
      <ImagesCover cover={project.images.cover} images={project.images.images} />
      <S.Description>
        <ul className="technologies">
          {project.technologiesUsed.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <h4>{project.type}</h4>
        <h2>{project.name}</h2>
        <nav>
          {project.websiteLink && (
            <a
              href={project.websiteLink}
              target="_blank"
              onClick={() => { void viewProject() }}
              rel="noreferrer"
            >
              Visitar
              <i className="bx bxs-book-content"></i>
            </a>
          )}
          {project.videoLink && (
            <a
              href={project.videoLink}
              target="_blank"
              onClick={() => { void viewProject() }}
              rel="noreferrer"
            >
              Preview
              <i className="bx bx-play-circle"></i>
            </a>
          )}
          {project.repoLink && (
            <a href={project.repoLink} target="_blank" rel="noreferrer">
              Repositório
              <i className="bx bxl-gitlab"></i>
            </a>
          )}
        </nav>
        <ul className="statistics">
          <li className="button-percent-techs" onClick={handleOpenPercentTechs}>
            <i className='bx bxs-bar-chart-alt-2'></i>
          </li>
          <li
            className={`button-like ${wasLiked ? "liked" : ""}`}
            onClick={() => { void likeProject() }}
          >
            {
              lodingLike ? <LoaderDefault color='light' size='sm' /> : <i className="bx bxs-like"></i>
            }
          </li>
          <li className="statistics-likes">
            {likes} {`curtida${likes === 1 ? '' : 's'}`}
          </li>
          <li className="statistics-views">
            {views} {`visualizaç${views === 1 ? 'ão' : 'ões'}`}
          </li>
        </ul>
        <PopUpPercentTechs
          idProject={project._id}
          show={statesShowPercentageTechs[project._id]}
          percents={project.repositoryTechnologiesPoints}
          onClose={() => { editStatesShowPercentageTechs(prevStates => ({ ...prevStates, [project._id]: false })); }}
          technologies={whiteListTechsUsedProject}
        />
      </S.Description>
    </S.Project>
  );
};

export default Project;
