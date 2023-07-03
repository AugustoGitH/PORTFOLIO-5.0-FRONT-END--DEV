import Link from "next/link"

import * as S from "./styles"

const PageNotFound = (): JSX.Element => {
  return (
    <S.PageNotFound>
      <div className="card">
        <span>404</span>
        <p>Ops! Parece que está página não existe!</p>
        <Link href="/">Voltar para o começo</Link>
      </div>
    </S.PageNotFound>
  )
}

export default PageNotFound