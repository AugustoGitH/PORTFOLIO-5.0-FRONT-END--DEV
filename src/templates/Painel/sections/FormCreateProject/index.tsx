import { useEffect } from "react"
import { Controller } from "react-hook-form"

import Checkboxes from "@/components/Checkboxes"
import Input from "@/components/Input"
import InputImages from "@/components/InputImagesCopy"
import LoaderDefault from "@/components/loaders/LoaderDefault"
import useCreateProject from "@/hooks/form/useCreateProject"

import InputSelectIdRepo from "./components/InputSelectIdRepo"
import { optionsTechnologiesUsedProject, optionsTypeProject } from "./settings"
import * as S from "./styles"

const FormCreateProject = (): JSX.Element => {
  const { registerForm, registerInput, control, errors, isCreatingProject, isReset } = useCreateProject()
  useEffect(() => {
    console.log(errors)
  }, [errors])

  return (
    <S.FormCreateProject>
      <h2>Criar Projeto</h2>
      <form {...registerForm} noValidate>
        {
          isCreatingProject && (
            <S.PopUpLoading>
              <LoaderDefault color="light" />
            </S.PopUpLoading>
          )
        }
        <Input label="Nome do Projeto" helperText={errors.name?.message} error={!!errors.name}  {...registerInput("name")} />
        <Input label="Link do Projeto" helperText={errors.websiteLink?.message} error={!!errors.websiteLink}  {...registerInput("websiteLink")} />
        <Input label="Link da Preview" helperText={errors.videoLink?.message} error={!!errors.videoLink} {...registerInput("videoLink")} />
        <Input
          label="Link do repositorio"
          helperText={errors.repoLink?.message}
          error={!!errors.repoLink}
          {...registerInput("repoLink")}
        />
        <Controller
          name="type"
          control={control}
          render={({ field: { onChange, name } }) => (
            <Checkboxes
              label="Tipo de projeto"
              name={name}
              onChange={({ value }) => { onChange(value as string); }}
              options={optionsTypeProject}
              helperText={errors.type?.message}
              error={!!errors.type}
              reset={isReset}
            />
          )}
        />
        <Controller
          name="technologiesUsed"
          control={control}
          render={({ field: { onChange, name } }) => (
            <Checkboxes
              tagAnyone
              label="Tecnologias e linguagens mais usadas"
              name={name}
              onChange={({ value }) => { onChange(value as [string, ...string[]]) }}
              options={optionsTechnologiesUsedProject}
              helperText={errors.technologiesUsed?.message}
              error={!!errors.technologiesUsed}
              reset={isReset}
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
              reset={isReset}
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
              reset={isReset}
            />
          )}
        />
        <button>Criar Projeto</button>
      </form>

    </S.FormCreateProject>
  )
}

export default FormCreateProject