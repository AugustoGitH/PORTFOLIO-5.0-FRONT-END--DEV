import { useState } from 'react';

import likeProjectService from '@/services/authLevel/public/likeProject';
import viewProjectService from '@/services/authLevel/public/viewProject';
import useProjectsStore from '@/stores/project/public/useProjects';
import { type IProjectPublic } from '@/types/Project';

import { type IUseProject } from './types';

const useProject = (project: IProjectPublic): IUseProject => {
  const likedProjects: string[] = JSON.parse(
    localStorage.getItem('projects-liked') ?? '[]'
  );

  const [likes, setLikes] = useState(project.likes);
  const [views, setViews] = useState(project.views);
  const [lodingLike, setLoadingLike] = useState(false);

  const [editStatesShowPercentageTechs, statesShowPercentageTechs] =
    useProjectsStore((state) => [
      state.editStatesShowPercentageTechs,
      state.statesShowPercentageTechs
    ]);

  const [wasLiked, setWasLiked] = useState(likedProjects.includes(project._id));

  const viewProject = async (): Promise<void> => {
    const { visualized } = await viewProjectService(project._id);
    setViews((prevViews) => (visualized ? prevViews + 1 : prevViews));
  };

  const likeProject = async (): Promise<void> => {
    const likedProjects: string[] = JSON.parse(
      localStorage.getItem('projects-liked') ?? '[]'
    );
    const projectIsLiked = likedProjects.includes(project._id);

    setLoadingLike(true);
    const { action } = await likeProjectService(
      project._id,
      projectIsLiked ? 'desfavorite' : 'favorite'
    );
    setLoadingLike(false);

    if (action) {
      window?.localStorage.setItem(
        'projects-liked',
        JSON.stringify(
          projectIsLiked
            ? likedProjects.filter((idLiked) => idLiked !== project._id)
            : [...likedProjects, project._id]
        )
      );
      setLikes((prevLikes) => (projectIsLiked ? prevLikes - 1 : prevLikes + 1));
      setWasLiked(!projectIsLiked);
    }
  };

  const handleOpenPercentTechs = (): void => {
    editStatesShowPercentageTechs((prevStates) => ({
      ...Object.fromEntries(
        Object.entries(prevStates).map(([key]) => [key, false])
      ),
      [project._id]: true
    }));
  };

  return {
    lodingLike,
    viewProject,
    likeProject,
    likes,
    views,
    wasLiked,
    handleOpenPercentTechs,
    statesShowPercentageTechs,
    editStatesShowPercentageTechs
  };
};

export default useProject;
