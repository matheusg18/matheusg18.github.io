import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import {
  NextProjectButton,
  PrevProjectButton,
  ProjectContainer,
  ProjectImage,
  ProjectImageContainer,
  ProjectImagePlaceholder,
  ProjectInfoContainer,
  ProjectsLinks,
  ProjectStackContainer,
  ProjectsWrapper,
  StacksContainer,
} from './Projects.styles';

function Projects() {
  const [projectIndex, setProjectIndex] = useState(0);

  const projects = [
    {
      name: 'FARM App de receitas',
      description:
        'O FARM App de Receitas é um site feito com React onde é possível ver, buscar, filtrar, favoritar e acompanhar o processo de preparação de comidas e drinks. Design exclusivamente mobile.',
      img: 'projects/farm-recipes-app.png',
      stack: ['React', 'React Hooks', 'ContextAPI', 'Bootstrap', 'Kanban'],
      repo: 'https://github.com/matheusg18/farm-app-de-receitas',
      demo: 'https://farm-app-de-receitas.vercel.app/',
    },
    {
      name: 'Time Tracking Dashboard',
      description:
        'Esta é a minha solução do desafio "Time tracking dashboard" do FrontEnd Mentor. O desafio consiste em criar um dashboard de organização do tempo seguindo o design, onde o usuário pode escolher o período de consulta.',
      img: 'projects/time-tracking-dashboard.png',
      stack: ['React', 'JavaScript', 'HTML', 'CSS', 'SASS', 'Mobile-first'],
      repo: 'https://github.com/matheusg18/time-tracking-dashboard',
      demo: 'https://matheusg18.github.io/time-tracking-dashboard/',
    },
    {
      name: 'Store Manager',
      description:
        'Store Manager é uma REST API de um sistema de gerenciamento de vendas, onde é possível criar, visualizar, deletar e atualizar produtos e vendas. Feito em TDD usando a arquitetura MSC.',
      img: null,
      stack: ['NodeJS', 'Mocha', 'Chai', 'Sinon', 'MySQL', 'TDD', 'Arquitetura MSC', 'Express'],
      repo: 'https://github.com/matheusg18/store-manager',
      demo: null,
    },
  ];

  const goNextProject = () => {
    setProjectIndex((prev) => {
      if (prev + 1 === projects.length) return 0;
      return prev + 1;
    });
  };

  const goPrevProject = () => {
    setProjectIndex((prev) => {
      if (prev - 1 < 0) return projects.length - 1;
      return prev - 1;
    });
  };

  return (
    <ProjectsWrapper id="projetos">
      <h2>Projetos</h2>
      <PrevProjectButton type="button" aria-label="projeto anterior" onClick={goPrevProject}>
        <IoIosArrowBack />
      </PrevProjectButton>
      <NextProjectButton type="button" aria-label="próximo projeto" onClick={goNextProject}>
        <IoIosArrowForward />
      </NextProjectButton>
      <ProjectContainer>
        <ProjectInfoContainer>
          <h3>{projects[projectIndex].name}</h3>
          <p>{projects[projectIndex].description}</p>
        </ProjectInfoContainer>
        {projects[projectIndex].img ? (
          <ProjectImageContainer>
            <ProjectImage src={projects[projectIndex].img} alt={projects[projectIndex].name} />
          </ProjectImageContainer>
        ) : (
          <ProjectImagePlaceholder />
        )}
        <ProjectStackContainer>
          <h4>Tecnologias usadas</h4>
          <StacksContainer>
            {projects[projectIndex].stack.map((st) => (
              <div key={`${projects[projectIndex].name}${st}`}>{st}</div>
            ))}
          </StacksContainer>
        </ProjectStackContainer>
      </ProjectContainer>
      <ProjectsLinks>
        {projects[projectIndex].demo && <a href={projects[projectIndex].demo}>Demonstração</a>}
        <a href={projects[projectIndex].repo}>Repositório</a>
      </ProjectsLinks>
    </ProjectsWrapper>
  );
}

export default Projects;
