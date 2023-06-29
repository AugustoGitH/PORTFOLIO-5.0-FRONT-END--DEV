import { useState } from 'react';

import { type IProjectPublic } from '@/types/Project';

interface IUseProject {
  likes: number;
  views: number;
  viewProject: () => void;
  likeProject: () => void;
}

const useProject = (project: IProjectPublic): IUseProject => {
  const [likes, setLikes] = useState(project.likes);
  const [views, setViews] = useState(project.views);
  a;

  const viewProject = (): void => {
    setViews((prevViews) => prevViews + 1);
  };

  const likeProject = (): void => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  return {
    viewProject,
    likeProject,
    likes,
    views
  };
};

export default useProject;
