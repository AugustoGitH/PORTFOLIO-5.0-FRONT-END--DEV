
import ancors from "@/settings/ancors"

import Link from "next/link"

import * as S from "./styles"
import { type IHeaderProps } from "./types"



const Header = ({ painel = false, home = true }: IHeaderProps): JSX.Element => {
  return (
    <S.Header>
      <div className="content">
        <Link href="/" title="Volte para a home"><h1>Augusto Westphal</h1></Link>
        <nav>
          <a
            className="button-curriculum"
            target="_blank"
            title="Faça download do meu CV"
            href={ancors.others.CV} rel="noreferrer"
          ><i className='bx bxs-receipt' /></a>
          <a
            className="button-github"
            target="_blank"
            title="Acesse o meu GitHub"
            href={ancors.networks.GITHUB} rel="noreferrer"
          ><i className='bx bxl-github' /></a>
          <a
            className="button-linkedin"
            target="_blank"
            title="Acesse o meu Linkedin"
            href={ancors.networks.LINKEDIN} rel="noreferrer"
          ><i className='bx bxl-linkedin-square' /></a>
        </nav>
      </div>
    </S.Header >
  )
}

export default Header