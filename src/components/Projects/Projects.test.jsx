import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';
import Projects from '.';
import theme from '../../theme.styles';

const projects = [
  {
    name: 'FARM App de receitas',
    description:
      'O FARM App de Receitas é um site feito com React onde é possível ver, buscar, filtrar, favoritar e acompanhar o processo de preparação de comidas e drinks. Design exclusivamente mobile.',
    stack: ['React', 'React Hooks', 'ContextAPI', 'Bootstrap', 'Kanban'],
    repo: 'https://github.com/matheusg18/farm-app-de-receitas',
    demo: 'https://farm-app-de-receitas.vercel.app/',
  },
];

describe('Testes no Projects', () => {
  beforeEach(() => render(
    <ThemeProvider theme={theme}>
      <Projects />
    </ThemeProvider>,
  ));

  it('Deve possuir um h2', () => {
    const sobreHeading = screen.getByRole('heading', { level: 2 });

    expect(sobreHeading).toBeInTheDocument();
  });

  it('Deve possuir os botões de navegação entre os projetos', () => {
    const nextButton = screen.getByRole('button', { name: 'próximo projeto' });
    const prevButton = screen.getByRole('button', { name: 'projeto anterior' });

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it('Deve navegar entre os projetos', () => {
    const nextButton = screen.getByRole('button', { name: 'próximo projeto' });

    projects.forEach(({
      name, description, stack, repo, demo,
    }) => {
      const projectHeading = screen.getByRole('heading', { level: 3, name });
      const projectDescription = screen.getByText(description);
      const projectImage = screen.getByRole('img');
      const stackHeading = screen.getByRole('heading', { level: 4, name: 'Tecnologias usadas' });
      const pops = stack.map((st) => screen.getByText(st));
      const repoLink = screen.getByRole('link', { name: 'Repositório' });

      expect(projectHeading).toBeInTheDocument();
      expect(projectDescription).toBeInTheDocument();
      expect(projectImage).toBeInTheDocument();
      expect(stackHeading).toBeInTheDocument();
      pops.forEach((pop) => {
        expect(pop).toBeInTheDocument();
      });
      expect(repoLink).toBeInTheDocument();
      expect(repoLink.href).toMatch(repo);

      if (demo) {
        const demoLink = screen.getByRole('link', { name: 'Demonstração' });

        expect(demoLink).toBeInTheDocument();
        expect(demoLink.href).toMatch(demo);
      }

      userEvent.click(nextButton);
    });
  });
});
