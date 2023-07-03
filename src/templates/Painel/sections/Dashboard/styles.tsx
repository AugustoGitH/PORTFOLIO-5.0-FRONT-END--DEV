import { presenceAnimation } from '@/animation/presence';
import roots from '@/styles/roots';
import { styled } from 'styled-components';

export const Dashboard = styled.section`
  width: 100%;
  padding: 5rem 0;
  .dash-projects {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
  }
  .dash-types {
    width: 700px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
    @media (max-width: ${roots.screens.MD}) {
      width: 100%;
    }
  }
`;

interface IProjectsDashCardProps {
  order: number
}

export const ProjectsDashCard = styled.li<IProjectsDashCardProps>`
  height: 180px;
  background: ${roots.color.LIGTH};
  color: ${roots.color.DARK};
  border-radius: 0.7rem;

  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: default;
  position: relative;
  opacity: 0;
  ${({ order }) => (
    presenceAnimation({
      animation: 'scale',
      duration: .5,
      delay: order / 8,
      timingFunction: "ease",
      fillMode: "forwards"
    })
  )}
  h3 {
    font-size: ${roots.font.size.MD};
    line-height: 1.4rem;
    text-transform: uppercase;
    text-align: center;
  }
  span {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    h4 {
      ${roots.font.size.SM};
      text-transform: uppercase;
      line-height: 1rem;
    }
    i {
      font-size: 1.7rem;
      margin-right: 1rem;
    }
  }
`;

export const ProjectsDashTypesCard = styled.li<IProjectsDashCardProps>`
  background-color: ${roots.color.ALERT};
  color: ${roots.color.DARK};
  text-align: center;
  padding: 1.4rem;
  border-radius: 0.4rem;
  opacity: 0;
  ${({ order }) => (
    presenceAnimation({
      animation: 'scale',
      duration: .5,
      delay: order / 7,
      timingFunction: "ease",
      fillMode: "forwards"
    })
  )}
  h3 {
    font-size: ${roots.font.size.MD};
  }
  h4 {
    text-transform: uppercase;
    font-size: ${roots.font.size.SM};
  }
`;
