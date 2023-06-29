import { presenceAnimation } from '@/animation/presence';
import roots from '@/styles/roots';
import styled from 'styled-components';

export const ImagesViewScreen = styled.div`
  position: fixed;
  width: 100vw;
  min-height: 100vh;
  top: 0;
  left: 0;
  background-color: #0000004f;

  z-index: ${roots.orders.XSUP};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  .card {
    background-color: ${roots.color.PRIMARY_LIGHT};
    box-shadow: ${roots.layout.BOX_SHADOW};
    border-radius: 1.5rem;
    ${presenceAnimation({
      animation: 'scale',
      duration: 0.2
    })};
    position: relative;
    overflow: hidden;
    padding: 5rem 2rem;
    width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: ${roots.screens.SM}) {
      padding: 5rem 0.3rem;
    }
    .button-close {
      all: unset;
      width: 40px;
      height: 40px;
      background-color: #373030;
      color: ${roots.color.ALERT};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: 1rem;
      top: 1rem;
      font-size: 1.3rem;
      cursor: pointer;
      transition: 0.2s;
      opacity: 0.5;
      border: 1px solid #e9ba5b28;
      &:hover {
        opacity: 1;
      }
    }
    .image-cover {
      width: 100%;
      height: 260px;
      background-color: #373030;
      border-radius: 1rem;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: ${roots.screens.SM}) {
        height: 210px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .images-list {
      width: 100%;
      display: flex;
      gap: 1rem;
      margin-top: 3%;
      justify-content: center;
      align-items: center;
      li {
        cursor: pointer;
        width: calc((100% / 4) - 1rem);
        height: 80px;
        overflow: hidden;
        background: ${roots.color.PRIMARY_LIGHT};
        border-radius: 0.5rem;
        transition: 0.2s;
        @media (max-width: ${roots.screens.SM}) {
          height: 60px;
        }
        &:hover {
          transform: scale(1.1);
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }
`;
