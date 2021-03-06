import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.95);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  & a {
    color: ${({ theme }) => theme.color.font};
    text-decoration: none;
  }
`;

export const HeaderCentralizer = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MyName = styled.a`
  font-size: 26px;
  font-weight: 700;
  display: block;
  padding: ${({ theme }) => theme.space(2)} ${({ theme }) => theme.space(4)};
`;

export const MobileMenuContainer = styled.div`
  padding: ${({ theme }) => theme.space(2)} ${({ theme }) => theme.space(4)}
    ${({ theme }) => theme.space(1.25)} ${({ theme }) => theme.space(4)};
  font-size: 26px;
`;

export const HeaderNav = styled.nav`
  position: absolute;
  z-index: -1;
  width: 100%;
  top: 62px;
  transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(-150%)')};
  background-color: rgba(0, 0, 0, 0.95);
  transition: transform 200ms ease-out;

  @media screen and (min-width: 1025px) {
    position: relative;
    transform: translate(0);
    top: 0;
    z-index: inherit;
    width: fit-content;
    margin-right: ${({ theme }) => theme.space(4)};
  }

  & > ul {
    list-style: none;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: ${({ theme }) => theme.space(3)};
    padding: ${({ theme }) => theme.space(2)} 0 ${({ theme }) => theme.space(4)} 0;
    font-size: 18px;
    font-weight: 700;

    @media screen and (min-width: 1025px) {
      display: flex;
      flex-flow: row nowrap;
      padding: 0;
    }
  }
`;

export const asd = 2;
