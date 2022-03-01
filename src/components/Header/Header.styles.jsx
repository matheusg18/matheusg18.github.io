import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.95);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & a {
    color: ${({ theme }) => theme.color.font};
    text-decoration: none;
  }
`;

export const MyName = styled.a`
  font-size: 26px;
  font-weight: 700;
  display: block;
  padding: ${({ theme }) => theme.space(2)} ${({ theme }) => theme.space(4)};
`;

export const MobileMenuContainer = styled.div`
  padding: ${({ theme }) => theme.space(2)} ${({ theme }) => theme.space(4)} ${({ theme }) => theme.space(1.25)} ${({ theme }) => theme.space(4)};
  font-size: 26px;
`;

export const HeaderNav = styled.nav`
  position: absolute;
  z-index: -1;
  width: 100%;
  top: 62px;
  transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(-150%)')};
  background-color: inherit;
  transition: transform 200ms ease-out;

  & > ul {
    list-style: none;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: ${({ theme }) => theme.space(3)};
    padding: ${({ theme }) => theme.space(2)} 0 ${({ theme }) => theme.space(4)} 0;
    font-size: 18px;
    font-weight: 700;
  }
`;

export const asd = 2;
