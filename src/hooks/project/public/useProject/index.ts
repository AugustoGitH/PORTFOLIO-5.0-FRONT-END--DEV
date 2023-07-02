import { useEffect, useState } from 'react';

import useLocalStorage from '@/hooks/useLocalStorage';
import useProjectsStore from '@/stores/project/public/useProjects';
import { type IProjectPublic } from '@/types/Project';

import { type IUseProject } from './types';

const useProject = (project: IProjectPublic): IUseProject => {
  const [likes, setLikes] = useState(project.likes);
  const [views, setViews] = useState(project.views);

  const [editStatesShowPercentageTechs, statesShowPercentageTechs] =
    useProjectsStore((state) => [
      state.editStatesShowPercentageTechs,
      state.statesShowPercentageTechs
    ]);

  const [projectsLiked, setProjectsLiked] = useLocalStorage<string[]>(
    'projects-liked',
    []
  );

  const [wasLiked, setWasLiked] = useState(false);

  useEffect(() => {
    setWasLiked(projectsLiked.includes(project._id));
  }, [projectsLiked, project._id]);

  const viewProject = (): void => {
    setViews((prevViews) => prevViews + 1);
  };

  const likeProject = (): void => {
    if (wasLiked) {
      setProjectsLiked(projectsLiked.filter((id) => id !== project._id));
      setLikes((prevLikes) => prevLikes - 1);
    } else {
      setProjectsLiked([...projectsLiked, project._id]);
      setLikes((prevLikes) => prevLikes + 1);
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
