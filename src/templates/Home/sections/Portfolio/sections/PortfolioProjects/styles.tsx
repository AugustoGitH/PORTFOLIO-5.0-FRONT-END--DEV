import roots from '@/styles/roots';
import { styled } from 'styled-components';

export const PortfolioProjects = styled.div`
  background-color: ${roots.color.PRIMARY_LIGHT};
  margin-top: 3rem;
  border-radius: 1.5rem;
  padding: 3rem 1rem 1rem 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-shadow: ${roots.layout.BOX_SHADOW};
  transition: 0.3s;
  position: relative;
  h1 {
    position: absolute;
    top: -1rem;
    margin-bottom: 1rem;
    text-transform: capitalize;
    text-align: center;
    line-height: 2rem;
    font-size: ${roots.font.size.XLG};
  }
`;
