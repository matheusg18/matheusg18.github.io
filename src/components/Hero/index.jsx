import React from 'react';
import { SiGmail, SiGithub, SiLinkedin } from 'react-icons/si';

function Hero() {
  return (
    <section>
      <img src="images/matheus.jpg" alt="Matheus Santos" />
      <h1>
        Olá 👋🏻,
        <br />
        eu sou Matheus.
        <br />
        Desenvolvedor FullStack.
      </h1>
      <div>
        <a href="https://github.com/matheusg18" aria-label="github">
          <SiGithub />
        </a>
        <a href="https://www.linkedin.com/in/matheusg18/" aria-label="linkedin">
          <SiLinkedin />
        </a>
        <a href="mailto:matheusgabriel.18@gmail.com" aria-label="gmail">
          <SiGmail />
        </a>
      </div>
    </section>
  );
}

export default Hero;
