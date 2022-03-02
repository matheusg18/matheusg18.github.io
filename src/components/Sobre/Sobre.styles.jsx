import styled from 'styled-components';

export const SobreWrapper = styled.section`
  width: 90%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.card};
  border-radius: 10px;
  padding: ${({ theme }) => theme.space(2.5)};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
`;

export const SobreTextImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SobreImg = styled.img`
  max-width: 240px;
  height: auto;
  margin: ${({ theme }) => theme.space(4)} 0;
`;

export const SobreParagraph = styled.p`
  margin-bottom: ${({ theme }) => theme.space(2)};
  text-align: center;
  opacity: 0.85;

  @media screen and (min-width: 1024px) {
    text-align: start;
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
`;
