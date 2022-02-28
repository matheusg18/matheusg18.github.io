import styled from 'styled-components';

export const HeroImg = styled.img`
  max-width: 70%;
  height: auto;
  border-radius: 50%;
  margin-bottom: ${({ theme }) => theme.space(5)};
`;

export const MyName = styled.span`
  color: ${({ theme }) => theme.color.secondary};
`;

export const HeroTextIconContainer = styled.div`

`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroCentralizer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  }
`;
