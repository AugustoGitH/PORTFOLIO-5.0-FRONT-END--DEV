import roots from "@/styles/roots";
import { styled } from "styled-components";


export const ManageProjects = styled.section`
width: 100%;
padding: 5rem 0;
  form{
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: start;
    button{
      all: unset;
      padding: .7rem 1rem;
      background-color: #ffffff14;
      border-radius: .3rem;
      font-size: ${roots.font.size.XSM};
      text-transform: uppercase;
      font-weight: bold;
      border: 1.4px solid #ffffff20;
      margin-top: 2rem;
      cursor: pointer;
      opacity: .7;
      transition: .2s;
      &:hover{
        opacity: 1;
      }
    }
  }

`