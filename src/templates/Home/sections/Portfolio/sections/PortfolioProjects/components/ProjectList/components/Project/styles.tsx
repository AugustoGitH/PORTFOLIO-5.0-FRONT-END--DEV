import { presenceAnimation } from '@/animation/presence';
import roots from '@/styles/roots';
import { styled } from 'styled-components';


interface IProjectProps {
  order: number
}


export const Project = styled.li<IProjectProps>`
  flex: none;
  width: 100%;
  height: calc(230px + 3rem);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 3rem;
  gap: 1.5rem;
  overflow: hidden;
  ${({ order }) => presenceAnimation({
  animation: 'translateRight',
  duration: .6,
  delay: order / 10,
  fillMode: "backwards",
  timingFunction: "ease"
})}
  @media (max-width: ${roots.screens.XXLG}) {
    flex-direction: column;
    height: calc(550px + 3rem);
  }
  @media (max-width: ${roots.screens.XLG}) {
    height: calc(580px + 3rem);
  }
  @media (max-width: ${roots.screens.LG}) {
    height: calc(660px + 3rem);
  }
  @media (max-width: ${roots.screens.XSM}) {
    height: calc(460px + 3rem);
  }
`;

export const Description = styled.div`
  width: calc(100% - 300px);
  height: 100%;
  position: relative;
  @media (max-width: ${roots.screens.XXLG}) {
    width: 100%;
    height: 40%;
    padding-left: 2rem;
  }
  @media (max-width: ${roots.screens.XLG}) {
    height: 30%;
  }
  @media (max-width: ${roots.screens.LG}) {
    height: 40%;
  }
  @media (max-width: ${roots.screens.SM}) {
    height: 40%;
    padding-left: 0;
  }
  @media (max-width: ${roots.screens.XSM}) {
    height: 50%;
  }
  .technologies {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0.7rem;
    text-transform: uppercase;
    flex-wrap: wrap;
    cursor: default;
    gap: 0.4rem;
    li {
      background-color: ${roots.color.PRIMARY_X_LIGHT};
      padding: 0.3rem .6rem;
      font-size: ${roots.font.size.XXSM};
      border-radius: 0.3rem;
      color: rgba(255, 255, 255, 0.795);
    }
  }
  h4 {
    font-size: ${roots.font.size.XSM};
    line-height: ${roots.font.line_heigth.SM};
    color: ${roots.color.ALERT};
    text-transform: capitalize;
  }
  h2 {
    text-transform: capitalize;
    line-height: ${roots.font.line_heigth.LG};
    font-size: ${roots.font.size.LG};
    @media (max-width: ${roots.screens.XXSM}) {
      font-size: calc(${roots.font.size.MD} + 0.2rem);
      line-height: calc(${roots.font.line_heigth.MD} + 0.2rem);
    }
  }
  nav {
    margin-top: 0.9rem;
    display: flex;
    gap: 1rem;
    a {
      all: unset;
      cursor: pointer;
      color: rgba(255, 255, 255, 0.788);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: relative;
      transition: 0.3s;
      font-size: ${roots.font.size.SM};
      @media (max-width: ${roots.screens.XXSM}) {
        font-size: calc(${roots.font.size.SM} - 0.1rem);
      }
      i {
        margin-left: 0.3rem;
      }
      &::after {
        content: '';
        position: absolute;
        width: 0%;
        height: 1.3px;
        background-color: rgba(255, 255, 255, 0.788);
        bottom: 0;
        left: 0;
        transition: 0.3s;
      }
      &:hover::after {
        width: 100%;
        background-color: ${roots.color.LIGTH};
      }
      &:hover {
        color: ${roots.color.LIGTH}
      }
    }
  }
  .statistics {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    .button-like, .button-percent-techs {
      cursor: pointer;
      transition: 0.3s;
      position: relative;
      &:hover {
        background-color: ${roots.color.ALERT};
        i {
          color: ${roots.color.DARK};
        }
        &::after {
          transform: translateY(0);
          opacity: 1;
        }
      }
      &::after {
        position: absolute;
        background-color: ${roots.color.DARK};
        width: 80px;
        text-align: center;
        padding: 0.2rem 0;
        border-radius: 0.2rem;
        font-size: 0.6rem;
        pointer-events: none;
        bottom: -1.9rem;
        left: -1.4rem;
        transform: translateY(-15px);
        opacity: 0;
        transition: 0.2s;
      }
    }
    .button-like{
      &::after{
        content: 'Curtir projeto';
      } 
    }
    .button-percent-techs{
      &::after{
        content: 'Estátisticas';
        @media (max-width: ${roots.screens.XSM}) {
          content: '';
          display: none;
        }
      }
    } 
    .liked {
      background-color: ${roots.color.ALERT};
      i {
        color: ${roots.color.DARK};
      }
      &::after {
        content: 'Projeto curtido';
        position: absolute;
        background-color: ${roots.color.DARK};
        width: 90px;
        text-align: center;
        padding: 0.2rem 0;
        border-radius: 0.2rem;
        font-size: 0.6rem;
        pointer-events: none;
        bottom: -1.9rem;
        left: -1.6rem;
        transform: translateY(-15px);
        opacity: 0;
        transition: 0.2s;
      }
    }

    li {
      font-size: calc(${roots.font.size.XSM} - .1rem);
      background: ${roots.color.PRIMARY_X_LIGHT};
      padding: 0.2rem 0.7rem;
      color: #d0d0d0;
      cursor: default;
      border-radius: 0.4rem;
      @media (max-width: ${roots.screens.XXSM}) {
        font-size: calc(${roots.font.size.XSM} - 0.1rem);
      }
    }
  }
`;
