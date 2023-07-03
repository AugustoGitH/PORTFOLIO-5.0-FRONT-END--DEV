import { useEffect, useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';

import schemaCreateProject from '@/schemas/form/createProject';
import { type IFormCreateProject } from '@/schemas/form/createProject/types';
import createProjectService from '@/services/authLevel/private/createProject';
import { zodResolver } from '@hookform/resolvers/zod';

import { type IDefaultModelFormCreateProject } from './models/types';
import { type IUseFormCreateProject, type IInfInputsBlockRepo } from './types';
import verifyFormCreatedProject from './utils/verifyForm';

const useCreateProject = (): IUseFormCreateProject => {
  const {
    register: registerInput,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<IFormCreateProject>({
    resolver: zodResolver(schemaCreateProject)
  });

  const onSubmit: SubmitHandler<IFormCreateProject> = (data) => {
    console.log(data);
  };

  const registerForm = {
    onSubmit: handleSubmit(onSubmit)
  };

  // const [isCreatingProject, setIsCreatingProject] = useState(false);
  // const [isReset, setIsReset] = useState(false);
  // const [infInputsBlockRepo, setInfInputsBlockRepo] =
  //   useState<IInfInputsBlockRepo>({
  //     repoLink: false,
  //     repoId: false
  //   });

  // useEffect(() => {
  //   const { repoLink, repoId } = project;
  //   setInfInputsBlockRepo({
  //     repoLink: Boolean(repoLink),
  //     repoId: Boolean(repoId)
  //   });
  // }, [project]);

  // const handleChangeAttrProject = (
  //   key: keyof IFormCreateProject,
  //   value: any
  // ): void => {
  //   setProject((prevProject) => ({ ...prevProject, [key]: value }));
  // };

  // const createProject = async (): Promise<void> => {
  //   const { error, message } = verifyFormCreatedProject(project);

  //   if (error) {
  //     alert(message);
  //     return;
  //   }

  //   setIsCreatingProject(true);

  //   const {} = createProjectService(project)

  // createProjectService(project).then((response) => {
  //   const { created, message } = response;
  //   setIsCreatingProject(false);
  //   alert(message);
  //   if (created) {
  //     resetCreationForm();
  //     queryClient.invalidateQueries(['projects']);
  //   }
  // });
  // };

  return { registerInput, registerForm, errors, control };
};

export default useCreateProject;
