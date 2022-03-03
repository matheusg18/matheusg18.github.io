import styled from 'styled-components';

export const HeroImg = styled.img`
  max-width: 320px;
  width: 70%;
  height: auto;
  border-radius: 50%;
  margin-bottom: ${({ theme }) => theme.space(5)};
`;

export const MyName = styled.span`
  color: ${({ theme }) => theme.color.secondary};
`;

export const HeroTextIconContainer = styled.div``;

export const HeroCentralizer = styled.section`
  max-width: 100%;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeroWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  @media screen and (min-width: 1366px) {
      justify-content: space-evenly;
    }

  & h1 {
    @media screen and (min-width: 1366px) {
      font-size: 40px;
    }
  }
`;

export const IconContainer = styled.div`
  margin-top: ${({ theme }) => theme.space(5)};
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  & a {
    display: block;
    color: ${({ theme }) => theme.color.secondary};
    text-decoration: none;
    font-size: 32px;

    @media screen and (min-width: 1366px) {
      font-size: 40px;
    }
  }
`;
