import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
  HeaderNav,
  HeaderWrapper,
  MobileMenuContainer,
  MyName,
} from './Header.styles';

function Header() {
  const [showMobileButton, setShowMobileButton] = useState(true);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const showButton = () => {
    if (window.innerWidth <= 700) {
      setShowMobileButton(true);
    } else {
      setShowMobileButton(false);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <HeaderWrapper>
      <MyName href="#top">Matheus</MyName>
      {showMobileButton && (
        <MobileMenuContainer onClick={() => setShowMobileNav((prev) => !prev)}>
          <GiHamburgerMenu data-testid="mobile-menu" />
        </MobileMenuContainer>
      )}
      <HeaderNav show={showMobileNav && showMobileButton}>
        <ul>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
        </ul>
      </HeaderNav>
    </HeaderWrapper>
  );
}

export default Header;
