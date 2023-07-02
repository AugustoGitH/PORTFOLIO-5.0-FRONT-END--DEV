import * as zod from 'zod';

export const schemaLogin = zod.object({
  name: zod
    .string()
    .nonempty('O nome é obrigatório!')
    .min(10, 'É necessário que tenha no mínimo 10 caracteres.'),
  password: zod
    .string()
    .nonempty('A senha é obrigatório!')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/,
      'A senha deve conter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um número.'
    )
});
