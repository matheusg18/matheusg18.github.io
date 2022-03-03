import styled from 'styled-components';

export const SobreWrapper = styled.section`
  width: 90%;
  max-width: 1250px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.card};
  border-radius: 10px;
  padding: ${({ theme }) => theme.space(2.5)};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 1366px) {
    padding: ${({ theme }) => theme.space(5)};
  }

  & h2 {
    @media screen and (min-width: 1366px) {
      font-size: 30px;
    }
  }
`;

export const SobreTextImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1366px) {
    margin: ${({ theme }) => theme.space(3)} 0;
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: 10%;
  }
`;

export const SobreImg = styled.img`
  max-width: 240px;
  height: auto;
  margin: ${({ theme }) => theme.space(4)} 0;

  @media screen and (min-width: 1366px) {
    max-width: 300px;
  }
`;

export const SobreParagraph = styled.p`
  margin-bottom: ${({ theme }) => theme.space(2)};
  text-align: center;
  opacity: 0.85;

  @media screen and (min-width: 1024px) {
    text-align: start;
  }

  @media screen and (min-width: 1366px) {
    font-size: 20px;
  }
`;

export const SobreLink = styled.a`
  display: block;
  width: fit-content;
  margin: ${({ theme }) => theme.space(1)} auto ${({ theme }) => theme.space(2)} auto;
  border-radius: 30px;
  padding: ${({ theme }) => theme.space(2)} ${({ theme }) => theme.space(4)};
  background-color: ${({ theme }) => theme.color.secondary};
  text-decoration: none;
  font-size: 20px;
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
    margin: 0;
  }
`;
