import styled from 'styled-components';

export const SkillsWrapper = styled.section`
  width: 90%;
  max-width: 1250px;
  position: relative;
  margin: ${({ theme }) => theme.space(5)} auto;
  background-color: ${({ theme }) => theme.color.card};
  border-radius: 10px;
  padding: ${({ theme }) => theme.space(2.5)};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 1366px) {
    padding: ${({ theme }) => theme.space(5)};
    margin: ${({ theme }) => theme.space(10)} auto;
  }

  & h2 {
    @media screen and (min-width: 1366px) {
      font-size: 30px;
    }
  }
`;

export const SkillsOverflowContainer = styled.div`
  margin-top: ${({ theme }) => theme.space(4)};
  margin-bottom: ${({ theme }) => theme.space(2)};
  width: 100%;
  overflow-x: auto;
  scroll-behavior: smooth;

  @media screen and (min-width: 1024px) {
    margin-top: ${({ theme }) => theme.space(6)};
    margin-bottom: 0;
  }
`;

export const SkillIconsWrapper = styled.div`
  width: 800px;
  height: 350px;
  display: grid;
  align-items: baseline;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(3, 1fr);

  @media screen and (min-width: 1024px) {
    width: 100%;
  }

  & > div {
    flex-shrink: 0;
  }
`;
