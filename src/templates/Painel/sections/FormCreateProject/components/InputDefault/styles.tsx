import roots from "@/styles/roots";
import { styled } from "styled-components";


export const InputDefault = styled.div`
  position: relative;
  width: 500px;
  @media (max-width: ${roots.screens.MD}) {
    width: 100%;
  }
  input {
    position: relative;
    width: 100%;
    padding: 20px 10px 10px;
    background: transparent;
    outline: none;
    box-shadow: none;
    border: none;
    color: #23242a;
    font-size: ${roots.font.size.SM};
    letter-spacing: 0.05em;
    transition: 0.5s;
    z-index: ${roots.orders.XSUB};
    font-family: ${roots.font.family.ALEGREYA}
  }

  span {
    position: absolute;
    left: 0;
    padding: 20px 10px 10px;
    font-size: ${roots.font.size.SM};
    color: #8f8f8f;
    letter-spacing: 00.05em;
    transition: 0.5s;
    pointer-events: none;
  }

  input:valid ~ span,
  input:focus ~ span {
    color: ${roots.color.ALERT};
    transform: translateX(-12px) translateY(-36px);
    font-size: ${roots.font.size.XSM};
  }

  i {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: var(--color-yellow);
    border-radius: 4px;
    transition: 0.5s;
    pointer-events: none;
    z-index: calc(${roots.orders.XSUB} - 1);
  }

  input:valid ~ i,
  input:focus ~ i {
    height: 44px;
    background-color: ${roots.color.LIGTH};
  }
`