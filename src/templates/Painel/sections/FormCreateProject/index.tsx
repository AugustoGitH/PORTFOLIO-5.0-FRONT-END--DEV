import { useEffect } from "react"
import { Controller } from "react-hook-form"

import Checkboxes from "@/components/Checkboxes"
import Input from "@/components/Input"
import InputImages from "@/components/InputImages"
import useCreateProject from "@/hooks/form/useCreateProject"

import InputSelectIdRepo from "./components/InputSelectIdRepo"
import { optionsTechnologiesUsedProject, optionsTypeProject } from "./settings"
import * as S from "./styles"

const ManageProjects = (): JSX.Element => {
  const { registerForm, registerInput, control, errors, inputsWatches } = useCreateProject()
  useEffect(() => {
    console.log(errors)
  }, [errors])

  return (
    <S.ManageProjects>
      <h2>Criar Projeto</h2>
      <form {...registerForm} noValidate>
        <Input label="Nome do Projeto" helperText={errors.name?.message} error={!!errors.name}  {...registerInput("name")} />
        <Input label="Link do Projeto" helperText={errors.websiteLink?.message} error={!!errors.websiteLink}  {...registerInput("websiteLink")} />
        <Input label="Link da Preview" helperText={errors.videoLink?.message} error={!!errors.videoLink} {...registerInput("videoLink")} />
        <Input
          label="Link do repositorio"
          helperText={errors.repoLink?.message}
          error={!!errors.repoLink}
          // disabled={!!inputsWatches.repoId} 
          {...registerInput("repoLink")}
        />
        <Controller
          name="type"
          control={control}
          render={({ field: { onChange } }) => (
            <Checkboxes
              label="Tipo de projeto"
              name="type-project"
              onChange={({ value }) => { onChange(value as string); }}
              options={optionsTypeProject}
              helperText={errors.type?.message}
              error={!!errors.type}
            />
          )}
        />
        <Controller
          name="technologiesUsed"
          control={control}
          render={({ field: { onChange } }) => (
            <Checkboxes
              tagAnyone
              label="Tecnologias e linguagens mais usadas"
              name="techs-useds"
              onChange={({ value }) => { onChange(value as [string, ...string[]]) }}
              options={optionsTechnologiesUsedProject}
              helperText={errors.technologiesUsed?.message}
              error={!!errors.technologiesUsed}
            />
          )}
        />
        <Controller
          name="repoId"
          control={control}
          render={({ field: { onChange } }) => (
            <InputSelectIdRepo
              onChange={(value) => { onChange(value) }}
              error={!!errors.repoId}
              helperText={errors.repoId?.message}
            // disabled={!!inputsWatches.repoLink}
            />
          )}
        />
        <Controller
          name="images"
          control={control}
          render={({ field: { onChange } }) => (
            <InputImages
              onChange={(value) => { onChange(value as { images: string[], cover: string }) }}
              error={!!errors.images}
              helperText={errors.images?.cover?.message}
            />
          )}
        />
        <button>Criar Projeto</button>
      </form>

    </S.ManageProjects>
  )
}

export default ManageProjects