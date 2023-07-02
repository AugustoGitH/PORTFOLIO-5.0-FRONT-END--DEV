import { useEffect, useState } from "react"

import LoaderDefault from "@/components/loaders/LoaderDefault"
import techsWhiteListIcon from "@/settings/techsWhiteListIcon"
import useProjectsStore from "@/stores/project/public/useProjects"
import treatingTechsToShowPercentage from "@/utils/treatingTechsToShowPercentage"


import * as S from "./styles"
import { sumPercentagesOfTechnologies } from "./utils"

const PercentagesUsedTechs = (): JSX.Element => {
  const { projects } = useProjectsStore()
  const [percentagesTech, setPercentagesTechs] = useState<Record<string, number> | undefined | null>(undefined)

  useEffect(() => {
    if (projects) {
      const pointersProjects: Array<Record<string, number>> = projects.map(project => project.repositoryTechnologiesPoints)

      setPercentagesTechs(
        treatingTechsToShowPercentage(
          sumPercentagesOfTechnologies(pointersProjects),
          ["html", "css", "javascript"]
        )
      )

    }
  }, [projects])

  return (
    <S.PercentagesUsedTechs>
      {
        percentagesTech === undefined && (
          <S.Loader>
            <LoaderDefault color="dark" />
          </S.Loader>
        )
      }
      {
        percentagesTech === null && (
          <S.NotFound>
            <span><i className='bx bx-x-circle'></i>Não foi possivel carregar as porcentagens das tecnologias.</span>
          </S.NotFound>
        )
      }

      {
        percentagesTech && Object.entries(percentagesTech).map(([tech, percent], index) => (
          <S.BarPercentage key={`${tech}-percentage-total`} order={index} percent={percent} tech={tech} >
            <span className="icon-tech">
              {techsWhiteListIcon.find(techIcon => techIcon.tech === tech)?.icon}
            </span>
            <div className="percentage-bar-container">
              <div className="percentage-bar-content">
                <span className="percentage-value" style={{}}>{percent}%</span>
              </div>
            </div>
          </S.BarPercentage>
        ))
      }
    </S.PercentagesUsedTechs >
  )
}

export default PercentagesUsedTechs