import styled from 'styled-components';

export const ProjectsWrapper = styled.section`
  width: 90%;
  max-width: 1250px;
  margin: 0 auto ${({ theme }) => theme.space(5)} auto;
  position: relative;
  background-color: ${({ theme }) => theme.color.card};
  border-radius: 10px;
  padding: ${({ theme }) => theme.space(2.5)};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 1366px) {
    padding: ${({ theme }) => theme.space(5)};
    margin-bottom: ${({ theme }) => theme.space(10)};
  }

  & h2 {
    @media screen and (min-width: 1366px) {
      font-size: 30px;
      margin-bottom: ${({ theme }) => theme.space(4)};
    }
  }
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
  cursor: pointer;
  transition: all 100ms;

  &:hover {
    font-size: 40px;
  }

  @media screen and (min-width: 1366px) {
    font-size: 42px;

    &:hover {
      font-size: 50px;
    }
  }
`;

export const PrevProjectButton = styled(ProjectsButton)`
  left: 10px;

  &:hover {
    left: 12px;
  }

  @media screen and (min-width: 1366px) {
    left: 16px;
  }
`;

export const NextProjectButton = styled(ProjectsButton)`
  right: 10px;

  &:hover {
    right: 12px;
  }

  @media screen and (min-width: 1366px) {
    right: 16px;
  }
`;

export const ProjectContainer = styled.div`
  @media screen and (min-width: 1366px) {
    display: grid;
    grid-template:
      'info image' 1fr
      'stack image' 1fr
      / 1fr 1fr;
    padding: 0 ${({ theme }) => theme.space(6)};
  }
`;

export const ProjectInfoContainer = styled.div`
  margin: ${({ theme }) => theme.space(3)} 0;

  @media screen and (min-width: 1366px) {
    grid-area: info;
  }

  & h3 {
    opacity: 0.9;

    @media screen and (min-width: 1366px) {
      font-size: 24px;
    }
  }

  & p {
    margin-top: ${({ theme }) => theme.space(2)};
    opacity: 0.85;
    text-align: left;

    @media screen and (min-width: 1366px) {
      font-size: 20px;
      margin-top: ${({ theme }) => theme.space(3)};
    }
  }
`;

export const ProjectStackContainer = styled.div`
  margin: ${({ theme }) => theme.space(3)} 0;

  @media screen and (min-width: 1366px) {
    grid-area: stack;
  }

  & h4 {
    font-size: 18px;
    opacity: 0.9;

    @media screen and (min-width: 1366px) {
      font-size: 22px;
    }
  }
`;

export const ProjectImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => theme.space(4)} 0;

  @media screen and (min-width: 1366px) {
    grid-area: image;
  }
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

  @media screen and (min-width: 1366px) {
    margin-top: ${({ theme }) => theme.space(3)};
  }

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

    @media screen and (min-width: 1366px) {
      font-size: 18px;
    }
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

  @media screen and (min-width: 1366px) {
    padding-left: ${({ theme }) => theme.space(6)};
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
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    transition: background-color 200ms;

    &:hover {
      background-color: ${({ theme }) => theme.color.hover};
    }

    &:active {
      background-color: ${({ theme }) => theme.color.active};
    }

    @media screen and (min-width: 1366px) {
      padding: ${({ theme }) => theme.space(2)} ${({ theme }) => theme.space(4)};
      font-size: 20px;
    }
  }
`;
