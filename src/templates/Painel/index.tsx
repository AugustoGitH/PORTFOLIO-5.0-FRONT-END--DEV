import Header from "@/patterns/layout/Header"

import { DashboardSection, FormCreateProjectSection, ManageProjectsSection, SearchReposSection } from "./sections"
import * as S from "./styles"

const Painel = (): JSX.Element => {
  return (
    <>
      <Header mode="painel" />
      <S.Painel>
        <div className="content">
          <DashboardSection />
          <SearchReposSection />
          <FormCreateProjectSection />
          <ManageProjectsSection />
        </div>
      </S.Painel>
    </>
  )
}

export default Painel