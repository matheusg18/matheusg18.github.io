import styled from 'styled-components';

export const SkillsWrapper = styled.section`
  width: 90%;
  position: relative;
  margin: ${({ theme }) => theme.space(5)} auto;
  background-color: ${({ theme }) => theme.color.card};
  border-radius: 10px;
  padding: ${({ theme }) => theme.space(2.5)};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
`;

export const SkillsOverflowContainer = styled.div`
  margin-top: ${({ theme }) => theme.space(4)};
  margin-bottom: ${({ theme }) => theme.space(2)};
  width: 100%;
  overflow-x: auto;
  scroll-behavior: smooth;
`;

export const SkillIconsWrapper = styled.div`
  width: 800px;
  height: 210px;
  display: flex;
  flex-flow: row wrap;
  align-items: baseline;
  align-content: space-between;
  justify-content: space-between;

  & > div {
    flex-shrink: 0;
  }
`;