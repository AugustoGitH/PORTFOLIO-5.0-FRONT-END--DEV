import { MainSection, TechologiesInProjectsSection } from "./sections"
import PortfolioProjects from "./sections/PortfolioProjects"
import * as S from "./styles"

const Portfolio = (): JSX.Element => {
  return (
    <S.Portfolio>
      <MainSection />
      <TechologiesInProjectsSection />
      <PortfolioProjects />
    </S.Portfolio>
  )
}

export default Portfolio