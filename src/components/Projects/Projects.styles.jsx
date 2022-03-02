import styled from 'styled-components';

export const ProjectsWrapper = styled.section`
  width: 90%;
  margin: 0 auto ${({ theme }) => theme.space(5)} auto;
  position: relative;
  background-color: ${({ theme }) => theme.color.card};
  border-radius: 10px;
  padding: ${({ theme }) => theme.space(2.5)};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
`;

const ProjectsButton = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.color.font};
  top: 50%;
  font-size: 32px;
  transform: translateY(-50%);
`;

export const PrevProjectButton = styled(ProjectsButton)`
  left: 10px;
`;

export const NextProjectButton = styled(ProjectsButton)`
  right: 10px;
`;

export const ProjectInfoContainer = styled.div`
  margin: ${({ theme }) => theme.space(3)} 0;

  & h3 {
    opacity: 0.9;
  }

  & p {
    margin-top: ${({ theme }) => theme.space(2)};
    opacity: 0.85;
    text-align: left;
  }
`;

export const ProjectStackContainer = styled.div`
  margin: ${({ theme }) => theme.space(3)} 0;

  & h4 {
    font-size: 18px;
    opacity: 0.9;
  }
`;

export const ProjectImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => theme.space(4)} 0;
`;

export const ProjectImage = styled.img`
  max-width: 200px;
  height: auto;
`;

export const StacksContainer = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  align-items: center;
  margin-top: ${({ theme }) => theme.space(1.5)};
  gap: ${({ theme }) => theme.space(1)};

  &::after {
    content: '';
    flex-grow: 1;
  }

  & > div {
    padding: ${({ theme }) => theme.space(0.5)} ${({ theme }) => theme.space(1)};
    background-color: ${({ theme }) => theme.color.skillCard};
    border-radius: 5px;
    opacity: 0.85;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.25);
  }
`;

export const ProjectsLinks = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 500px) {
    justify-content: flex-start;
    gap: ${({ theme }) => theme.space(2)};
  }

  & > a {
    display: block;
    width: fit-content;
    border-radius: 30px;
    padding: ${({ theme }) => theme.space(1)} ${({ theme }) => theme.space(2)};
    background-color: ${({ theme }) => theme.color.secondary};
    text-decoration: none;
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.font};
  }
`;
