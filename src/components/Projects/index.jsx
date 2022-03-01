import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import {
  NextProjectButton,
  PrevProjectButton,
  ProjectImage,
  ProjectImageContainer,
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
      <div>
        <ProjectInfoContainer>
          <h3>{projects[projectIndex].name}</h3>
          <p>{projects[projectIndex].description}</p>
        </ProjectInfoContainer>
        <ProjectImageContainer>
          <ProjectImage src={projects[projectIndex].img} alt={projects[projectIndex].name} />
        </ProjectImageContainer>
        <ProjectStackContainer>
          <h4>Tecnologias usadas</h4>
          <StacksContainer>
            {projects[projectIndex].stack.map((st) => (
              <div key={`${projects[projectIndex].name}${st}`}>{st}</div>
            ))}
          </StacksContainer>
        </ProjectStackContainer>
      </div>
      <ProjectsLinks>
        <a href={projects[projectIndex].demo}>Demonstração</a>
        <a href={projects[projectIndex].repo}>Repositório</a>
      </ProjectsLinks>
    </ProjectsWrapper>
  );
}

export default Projects;
