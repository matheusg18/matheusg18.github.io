import React from 'react';
import { SiGmail, SiGithub, SiLinkedin } from 'react-icons/si';
import {
  HeroCentralizer,
  HeroImg,
  HeroTextIconContainer,
  HeroWrapper,
  IconContainer,
  MyName,
} from './Hero.styles';

function Hero() {
  return (
    <HeroCentralizer>
      <HeroWrapper>
        <HeroImg src="images/matheus.jpg" alt="Matheus Santos" />
        <HeroTextIconContainer>
          <h1>
            Olá 👋🏻,
            <br />
            eu sou
            {' '}
            <MyName>Matheus</MyName>
            .
            <br />
            Desenvolvedor FullStack.
          </h1>
          <IconContainer>
            <a href="https://github.com/matheusg18" aria-label="github">
              <SiGithub />
            </a>
            <a href="https://www.linkedin.com/in/matheusg18/" aria-label="linkedin">
              <SiLinkedin />
            </a>
            <a href="mailto:matheusgabriel.18@gmail.com" aria-label="gmail">
              <SiGmail />
            </a>
          </IconContainer>
        </HeroTextIconContainer>
      </HeroWrapper>
    </HeroCentralizer>
  );
}

export default Hero;
