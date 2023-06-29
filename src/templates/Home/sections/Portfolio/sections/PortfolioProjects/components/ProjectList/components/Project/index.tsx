import image from '@/assets/images/profile-01.webp';
import ImagesCover from '@/templates/Home/sections/Portfolio/sections/PortfolioProjects/components/ProjectList/components/Project/components/ImagesCover';

import * as S from './styles';
import { type IProjectProps } from './types';

const Project = ({ project }: IProjectProps): JSX.Element => {
  return (
    <S.Project className="project">
      <ImagesCover cover={image.src} images={[image.src]} />
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
              // onClick={handleClickViewProject}
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
              // onClick={handleClickViewProject}
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
          <li
            className={`button-like ${"true ? 'liked' : ''"}`}
          // onClick={handleClickLikedProject}
          >
            <i className="bx bxs-like"></i>
          </li>
          {/* <li>
            {countLikes} {`curtida${countLikes === 1 ? '' : 's'}`}
          </li>
          <li>
            {countViews} {`visualizaç${countViews === 1 ? 'ão' : 'ões'}`}
          </li> */}
        </ul>
      </S.Description>
    </S.Project>
  );
};

export default Project;
