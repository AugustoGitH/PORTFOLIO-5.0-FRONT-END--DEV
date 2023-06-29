import { presenceAnimation } from '@/animation/presence';
import roots from '@/styles/roots';
import { styled } from 'styled-components';

export const ProjectList = styled.div`
  width: 100%;
  max-height: calc(((230px + 3rem) * 3) + (3rem * 3));
  overflow: auto;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;
  padding-right: 1rem;
  padding-bottom: 3rem;
  @media (max-width: ${roots.screens.XXLG}) {
    gap: 4rem;
  }
  @media (max-width: ${roots.screens.XSM}) {
    padding: 0 0.5rem;
  }
  &::-webkit-scrollbar {
    width: 3px;
    background-color: #c9abab1a;
    border-radius: 1rem;
  }
  &::-webkit-scrollbar-thumb {
    width: 100%;
    height: 90px;
    border-radius: 1rem;
    background-color: rgba(218, 197, 197, 0.253);
  }

  .project {
    border-bottom: 1.5px solid #ffffff1d;
  }
  .project:last-child {
    border-bottom: none;
  }
  .loader-projects {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 0;
  }
  .not-projects {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${presenceAnimation({
      animation: 'scale',
      duration: 0.3
    })};
    span {
      display: inline-block;
      background-color: #ffffff14;
      color: #ffffffab;
      padding: 0.3rem 1rem;
      border-radius: 0.3rem;
      cursor: default;
    }
  }
`;
