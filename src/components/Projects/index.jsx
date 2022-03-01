import React, { useState } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';

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
    <section>
      <h2>Projetos</h2>
      <button
        type="button"
        aria-label="projeto anterior"
        onClick={goPrevProject}
      >
        <GrPrevious />
      </button>
      <button
        type="button"
        aria-label="próximo projeto"
        onClick={goNextProject}
      >
        <GrNext />
      </button>
      <div>
        <h3>{projects[projectIndex].name}</h3>
        <p>{projects[projectIndex].description}</p>
        <img src={projects[projectIndex].img} alt={projects[projectIndex].name} />
        <h4>Tecnologias usadas</h4>
        {projects[projectIndex].stack.map((st) => (
          <div key={`${projects[projectIndex].name}${st}`}>{st}</div>
        ))}
      </div>
      <a href={projects[projectIndex].demo}>Demonstração</a>
      <a href={projects[projectIndex].repo}>Repositório</a>
    </section>
  );
}

export default Projects;
