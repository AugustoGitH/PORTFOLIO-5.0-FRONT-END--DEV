import roots from "@/styles/roots";
import { styled } from "styled-components";


export const Painel = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${roots.color.PRIMARY};
  padding: 0 ${roots.layout.PADDING_HORIZONTAL_CONTAINER};
  display: flex;
  justify-content: center;
  .content {
    width: ${roots.layout.MAX_WIDTH_CONTENT};
  }
`