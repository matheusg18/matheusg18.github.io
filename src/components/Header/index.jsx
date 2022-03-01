import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

function Header() {
  const [showMobileButton, setShowMobileButton] = useState(true);

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
    <header>
      <a href="#top">Matheus</a>
      {showMobileButton && <GiHamburgerMenu />}
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
    </header>
  );
}

export default Header;
