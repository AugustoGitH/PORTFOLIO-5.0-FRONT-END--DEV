import { type SubmitHandler, useForm } from 'react-hook-form';

import { schemaLogin } from '@/schemas/form/login';
import { type IFormLogin } from '@/schemas/form/login/types';
import loginService from '@/services/authLevel/public/login';
import { zodResolver } from '@hookform/resolvers/zod';

import { useRouter } from 'next/router';

import { type IRegisterForm, type IUseFormLogin } from './types';

const useLogin = (): IUseFormLogin => {
  const {
    register: registerInput,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IFormLogin>({
    resolver: zodResolver(schemaLogin)
  });

  const navigation = useRouter();

  const onSubmit: SubmitHandler<IFormLogin> = async (data): Promise<void> => {
    const { isLogged, message } = await loginService(data);

    alert(message);

    if (isLogged) {
      await navigation.push('/painel');
      reset();
    }
  };

  const registerForm: IRegisterForm = {
    onSubmit: handleSubmit(onSubmit)
  };

  return {
    registerForm,
    registerInput,
    errors
  };
};

export default useLogin;
