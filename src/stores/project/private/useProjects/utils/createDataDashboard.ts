import { type IProjectPrivate } from '@/types/Project';

import { type IDashboardData } from '../types';

const createDataDashboard = (projects: IProjectPrivate[]): IDashboardData => ({
  likes:
    projects.length > 0
      ? projects
          .map((project) => project.likes)
          .reduce((prev, current) => current + prev)
      : 0,

  views:
    projects.length > 0
      ? projects
          .map((project) => project.views)
          .reduce((prev, current) => current + prev)
      : 0,

  completedProjects: projects.filter((project) => project.websiteLink).length,

  devlopmentProjects:
    projects.length - projects.filter((project) => project.websiteLink).length,

  ladingPages: projects.filter((project) => project.type === 'lading page')
    .length,

  webApps: projects.filter((project) => project.type === 'web app').length,

  ecommerces: projects.filter((project) => project.type === 'e-commerce').length
});

export default createDataDashboard;
