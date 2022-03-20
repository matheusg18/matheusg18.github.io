import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';
import Projects from '.';
import theme from '../../theme.styles';
import projects from '../../data/projects.json';

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
      name, description, stack, repo, demo, img,
    }) => {
      const projectHeading = screen.getByRole('heading', { level: 3, name });
      const projectDescription = screen.getByText(description);
      const stackHeading = screen.getByRole('heading', { level: 4, name: 'Tecnologias usadas' });
      const pops = stack.map((st) => screen.getByText(st));
      const repoLink = screen.getByRole('link', { name: 'Repositório' });

      expect(projectHeading).toBeInTheDocument();
      expect(projectDescription).toBeInTheDocument();
      expect(stackHeading).toBeInTheDocument();
      pops.forEach((pop) => {
        expect(pop).toBeInTheDocument();
      });
      expect(repoLink).toBeInTheDocument();
      expect(repoLink.href).toMatch(repo);

      if (img) {
        const projectImage = screen.getByRole('img');

        expect(projectImage).toBeInTheDocument();
      }

      if (demo) {
        const demoLink = screen.getByRole('link', { name: 'Demonstração' });

        expect(demoLink).toBeInTheDocument();
        expect(demoLink.href).toMatch(demo);
      }

      userEvent.click(nextButton);
    });
  });
});
