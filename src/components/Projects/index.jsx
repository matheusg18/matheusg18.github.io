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
import projects from '../../data/projects.json';

function Projects() {
  const [projectIndex, setProjectIndex] = useState(0);

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
