import { presenceAnimation } from "@/animation/presence";
import roots from "@/styles/roots";
import { styled } from "styled-components";


export const PageNotFound = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${roots.color.PRIMARY};
  display: flex;
  align-items: center;
  justify-content: center;
  .card{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${presenceAnimation({
  animation: "scale",
  duration: .4,
  delay: .2,
  timingFunction: "ease-out"
})}
    span{
    font-size: ${roots.font.size.XXLG};
    font-weight: bold;
    color: ${roots.color.ALERT}
  }
  a{
    background: transparent;
    font-size: ${roots.font.size.SM};
    padding: .5rem 1.4rem;
    border: 1.5px solid ${roots.color.ALERT};
    color: ${roots.color.ALERT};
    border-radius: 2rem;
    margin-top: 2rem;
    font-weight: bold;
    transition: .2s;
    cursor: pointer;
    &:hover{
      background: ${roots.color.ALERT};
      color: ${roots.color.DARK};
    }
  }
  }
`