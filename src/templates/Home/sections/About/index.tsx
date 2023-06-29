
import imageProfile from "@/assets/images/profile-01.webp"
import ancors from "@/settings/ancors"

import Image from "next/image"

import * as S from "./styles"
const About = (): JSX.Element => {
  return (
    <S.About>
      <S.ImageProfile>
        <Image src={imageProfile} alt="Imagem do Augusto feita por IA" priority width={190} height={190} />
      </S.ImageProfile>
      <S.AboutDescription>
        <h3>Sobre mim</h3>
        <h1>Augusto C. Westphal</h1>
        <p>
          Sou Augusto Caetano Westphal, um desenvolvedor <strong>full-stack</strong> e <strong>web designer</strong>{" "}
          apaixonado por tecnologia. Com mais de dois anos de experiência, tenho habilidades em <strong>desenvolvimento web</strong>,
          <strong>design de interface</strong> e <strong>otimização de desempenho</strong>. Trabalhei como freelancer em diversos projetos,
          aprimorando minhas habilidades e conhecimentos. Meu objetivo é crescer como <strong>desenvolvedor junior</strong> em uma empresa
          de tecnologia, contribuindo para projetos empolgantes. Sou <strong>proativo</strong>, trabalho bem em equipe e me adapto facilmente
          a diferentes projetos.
        </p>
        <nav>
          <a
            title="Acesse meu instagram"
            target="_blank"
            href={ancors.networks.INSTAGRAM} rel="noreferrer"
          >Instagram <i className='bx bxl-instagram' ></i></a>
          <a
            title="Acesse meu facebook"
            target="_blank"
            href={ancors.networks.FACEBOOK} rel="noreferrer"
          >Facebook<i className='bx bxl-facebook' ></i></a>
        </nav>
      </S.AboutDescription>
      <S.InfoProjectsGit>
        <span><i className='bx bxl-github'></i></span>
        <h2>São mais de 20 projetos publicados no Github</h2>
      </S.InfoProjectsGit>
      <S.InfoPercentTechs>
        <div className="title">
          <span><i className='bx bxs-doughnut-chart'></i></span>
          <h2>Porcentagem das tecnologias usadas em meus projetos</h2>
        </div>
      </S.InfoPercentTechs>
      <S.ContactMe id="contact">
        <h3>Vamos conversar?</h3>
        <h1>Contate-me</h1>
        <p>
          <i>Olá futuro cliente ou empresa!</i><br />Sou um <strong>desenvolvedor full-stack</strong> experiente e pronto para transformar suas
          ideias em realidade no <strong>mundo digital</strong>. Se você está buscando por alguém que possa ajudar a criar ou dar um upgrade no
          seu site ou aplicativo, você acabou de encontrar. Não hesite em entrar em contato comigo, estou ansioso para discutir como posso
          ajudar a sua empresa a alcançar novos patamares digitais com minhas habilidades e criatividade. Vamos juntos criar algo incrível!
        </p>
        <ul>
          <li>
            <a title="Contate-me pelo email" href={ancors.networks.EMAIL} target="_blank" rel="noreferrer">
              <span>Email</span>
              <i className='bx bxs-envelope' ></i>
            </a>
          </li>
          <li>
            <a title="Contate-me pelo whatsapp" href={ancors.networks.WHATSAPP} target="_blank" rel="noreferrer">
              <span>Whatsapp</span>
              <i className='bx bxl-whatsapp' ></i>
            </a>
          </li>
          <li>
            <a title="Contate-me pelo linkedin" href={ancors.networks.LINKEDIN} target="_blank" rel="noreferrer">
              <span>Linkedin</span>
              <i className='bx bxl-linkedin-square' ></i>
            </a>
          </li>
        </ul>
      </S.ContactMe>
      <S.TextCopyRigth>© Augusto Caetano Westphal, 2023. <br />All Rights Reserved</S.TextCopyRigth>
    </S.About>
  )
}

export default About