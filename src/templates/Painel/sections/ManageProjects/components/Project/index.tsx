import Checkboxes from "@/components/Checkboxes"
import LoaderDefault from "@/components/loaders/LoaderDefault"
import useEditProject from "@/hooks/project/private/useEditProject"
import { type IProjectPrivate } from "@/types/Project"

import { optionsTechnologiesUsedProject, optionsTypeProject } from "../../../FormCreateProject/settings"
import ControlButtons from "./components/ControlButtons"
import DisplayPositions from "./components/DisplayPositions"
import ImagesProject from "./components/ImagesProject"
import InputEdit from "./components/InputEdit"
import * as S from "./styles"

const Project = ({ project }: { project: IProjectPrivate }): JSX.Element => {

  const { handleUpdateProject,
    addEditedValues,
    valuesProject,
    handleDeleteProject,
    handleReloadRepo,
    undoChanges,
    isLoading,
    isEdited,
    statesInputEdit,
    handleToggleStateInputEdit } = useEditProject(project)


  return (
    <S.Project className="project">
      {
        isLoading && (
          <S.PopupLoading>
            <LoaderDefault color="light" />
          </S.PopupLoading>
        )
      }
      <div className="sub-project">
        <ImagesProject
          cover={project.images.cover}
          images={project.images.images}
        />
        <DisplayPositions
          value={valuesProject.orderOfFive}
          onChange={vl => { addEditedValues("orderOfFive", vl); }}
        />
        <div className="form-inputs-edit">
          <InputEdit
            placeholcer="Nome do projeto"
            edited={statesInputEdit.name}
            onChange={vl => { addEditedValues("name", vl); }}
            value={valuesProject.name}
            onEdit={() => { handleToggleStateInputEdit("name"); }}
          />
          <InputEdit
            placeholcer="Link do projeto"
            edited={statesInputEdit.websiteLink}
            onChange={vl => { addEditedValues("websiteLink", vl); }}
            value={valuesProject.websiteLink}
            onEdit={() => { handleToggleStateInputEdit("websiteLink"); }}
          />
          <InputEdit
            placeholcer="Link da preview"
            edited={statesInputEdit.videoLink}
            onChange={vl => { addEditedValues("videoLink", vl); }}
            value={valuesProject.videoLink}
            onEdit={() => { handleToggleStateInputEdit("videoLink"); }}
          />
          <InputEdit

            placeholcer="Id do repositório"
            edited={statesInputEdit.repoId}
            onChange={vl => { addEditedValues("repoId", (vl === "" ? null : vl)); }}
            value={valuesProject.repoId ?? ""}
            onEdit={() => { handleToggleStateInputEdit("repoId"); }}
          />
          <InputEdit
            placeholcer="Link do repositório"
            edited={statesInputEdit.repoLink}
            onChange={vl => { addEditedValues("repoLink", vl) }}
            value={valuesProject.repoLink}
            onEdit={() => { handleToggleStateInputEdit("repoLink"); }}
          />
        </div>
        <ControlButtons
          onReloadRepo={handleReloadRepo}
          onTrash={handleDeleteProject}
        />
      </div>
      <div className="sup-project">
        <Checkboxes
          label="Tipo de projeto"
          name="type"
          options={optionsTypeProject}
          value={valuesProject.type}
          onChange={vl => { addEditedValues("type", vl.value); }}
        />
        <Checkboxes
          label="Tecnologias e linguagens mais usadas"
          name="type"
          tagAnyone
          value={valuesProject.technologiesUsed}
          options={optionsTechnologiesUsedProject}
          onChange={vl => { addEditedValues("technologiesUsed", vl.value); }}
        />
      </div>
      {
        isEdited && (
          <nav className="buttons-control-edit">
            <button onClick={() => { void handleUpdateProject() }}>
              <i className='bx bxs-save' ></i>
              Salvar alterações
            </button>
            <button onClick={undoChanges}>
              Desfazer alterações
            </button>
          </nav>
        )
      }
    </S.Project>
  )
}


export default Project