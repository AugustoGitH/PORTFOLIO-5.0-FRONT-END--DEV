import { useEffect, useState } from "react"

import useProjectsStore from "@/stores/project/private/useProjects"
import { type IDashboardData } from "@/stores/project/private/useProjects/types"

import * as S from "./styles"

const Dashboard = (): JSX.Element => {
  const dataDashboard = useProjectsStore(state => state.dataDashboard)

  const [dashboardDefaultValues, setDashboardDefaultValues] = useState<IDashboardData>({
    webApps: "***",
    ladingPages: "***",
    completedProjects: "***",
    devlopmentProjects: "***",
    ecommerces: "***",
    likes: "***",
    views: "***"
  })

  useEffect(() => {
    if (dataDashboard) {
      setDashboardDefaultValues(dataDashboard)
    }
  }, [dataDashboard])

  return (
    <S.Dashboard>
      <h2>Dashboard</h2>
      <ul className="dash-projects">
        <S.ProjectsDashCard order={1}>
          <h3>Seus projetos Receberam</h3>
          <span>
            <i className='bx bxs-like'></i>
            <h4>{dashboardDefaultValues.likes} curtidas em projetos</h4>
          </span>
        </S.ProjectsDashCard>
        <S.ProjectsDashCard order={2}>
          <h3>Tráfego de visualizações</h3>
          <span>
            <i className='bx bxs-mouse-alt'></i>
            <h4>{dashboardDefaultValues.views} em seus projetos</h4>
          </span>
        </S.ProjectsDashCard>
        <S.ProjectsDashCard order={3}>
          <h3>{dashboardDefaultValues.completedProjects} {`projeto${dashboardDefaultValues.completedProjects === 1 ? "" : "s"}`}</h3>
          <span>
            <i className='bx bxs-box' ></i>
            <h4>concluidos e ativos em seu portifólio</h4>
          </span>
        </S.ProjectsDashCard>
        <S.ProjectsDashCard order={4}>
          <h3>{dashboardDefaultValues.devlopmentProjects} {`projeto${dashboardDefaultValues.devlopmentProjects === 1 ? "" : "s"}`}</h3>
          <span>
            <i className='bx bxs-cog' ></i>
            <h4>Em desenvolvimento</h4>
          </span>
        </S.ProjectsDashCard>
      </ul>
      <ul className="dash-types">
        <S.ProjectsDashTypesCard order={5}>
          <h3>{dashboardDefaultValues.ladingPages}</h3>
          <h4>Lading Pages</h4>
        </S.ProjectsDashTypesCard>
        <S.ProjectsDashTypesCard order={6}>
          <h3>{dashboardDefaultValues.webApps}</h3>
          <h4>Web Apps</h4>
        </S.ProjectsDashTypesCard>
        <S.ProjectsDashTypesCard order={7}>
          <h3>{dashboardDefaultValues.ecommerces}</h3>
          <h4>E-Commerces</h4>
        </S.ProjectsDashTypesCard>
      </ul>
    </S.Dashboard>
  )
}

export default Dashboard