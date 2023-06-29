import Header from "@/patterns/layout/Header"

import Head from "next/head"

import About from "./sections/About"
import Portfolio from "./sections/Portfolio"
import * as S from "./styles"

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Augusto Westphal</title>
      </Head>
      <Header />
      <S.Home>
        <div className="content">
          <About />
          <Portfolio />
        </div>
      </S.Home>
    </>
  )
}


export default Home