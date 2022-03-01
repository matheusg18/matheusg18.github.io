import React from 'react';
import {
  SobreImg,
  SobreLink,
  SobreParagraph,
  SobreTextImgContainer,
  SobreWrapper,
} from './Sobre.styles';

function Sobre() {
  return (
    <SobreWrapper>
      <h2>Sobre mim</h2>
      <SobreTextImgContainer>
        <SobreImg src="images/ilustração.png" alt="ilustração" />
        <div>
          <SobreParagraph>
            Meu nome é Matheus Santos, tenho 21 anos e moro em Recife - PE. Sou apaixonado por
            programação e por aprender coisas novas. Comecei minha jornada na programação em 2018
            quando eu aprendi C. Daí em diante estudei C++, C# (Unity), Java, Python e não parava,
            sempre gostei muito de programar.
          </SobreParagraph>
          <SobreParagraph>
            Entrei para a Trybe (escola de programação) para me tornar um desenvolvedor FullStack.
            Meu objetivo atual é começar a minha carreira de desenvolvedor de software e enfrentar o
            desafio que me espera.
          </SobreParagraph>
          <SobreParagraph>
            No tempo livre gosto de jogar algum game, assistir um anime ou programar. E programar
            sempre com um lofizinho né, não pode faltar.
          </SobreParagraph>
        </div>
      </SobreTextImgContainer>
      <SobreLink
        href="https://drive.google.com/file/d/1jh03xwlASqpnNnw1fBmsOVJwVxgFhYoj/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        Download CV
      </SobreLink>
    </SobreWrapper>
  );
}

export default Sobre;
