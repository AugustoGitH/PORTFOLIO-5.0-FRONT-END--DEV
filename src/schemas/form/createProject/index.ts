import regex from '@/schemas/regex';
import {
  type TProjectTechnologiesUsed,
  type TProjectType
} from '@/types/Project';
import * as z from 'zod';

import { whiteListTechsUsedProject, whiteListTypesProject } from '../settings';

const schemaCreateProject = z.object({
  name: z
    .string()
    .nonempty()
    .min(4, 'O nome pode ter no minimo 4 caracteres.')
    .max(47, 'O nome pode ter no maximo 47 caracteres.'),
  type: z
    .string()
    .nonempty()
    .refine(
      (type: string) => whiteListTypesProject.includes(type as TProjectType),
      {
        message: 'O tipo selecionado é inválido!'
      }
    ),
  technologiesUsed: z
    .array(z.string())
    .nonempty()
    .min(2)
    .refine((techsSelected) =>
      techsSelected.every((tech: string) =>
        whiteListTechsUsedProject.includes(tech as TProjectTechnologiesUsed)
      )
    ),
  websiteLink: z
    .string()
    .regex(regex.REGEX_URL_WEBSITE, 'Url inválida!')
    .default(''),
  videoLink: z.string().regex(regex.REGEX_URL_YOUTUBE).default(''),
  repoId: z.number().min(5),
  images: z.object({
    cover: z.string().nonempty(),
    images: z.array(z.string())
  }),
  repoLink: z.string().regex(regex.REGEX_URL_REPO_GITHUB).default('')
});

export default schemaCreateProject;
