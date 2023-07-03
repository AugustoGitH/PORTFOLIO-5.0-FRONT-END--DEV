import { type BaseSyntheticEvent } from 'react';
import {
  type UseFormRegister,
  type FieldErrors,
  type Control
} from 'react-hook-form';

import { type IFormCreateProject } from '@/schemas/form/createProject/types';
export interface IInfInputsBlockRepo {
  repoLink: boolean;
  repoId: boolean;
}

export interface IUseFormCreateProject {
  registerForm: IRegisterForm;
  registerInput: UseFormRegister<IFormCreateProject>;
  errors: FieldErrors<IFormCreateProject>;
  control: Control<IFormCreateProject>;
  inputsWatches: IFormCreateProject;
}

export interface IRegisterForm {
  onSubmit: (e?: BaseSyntheticEvent<object> | undefined) => Promise<void>;
}
