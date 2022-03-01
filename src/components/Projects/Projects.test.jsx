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
  render(
    <ThemeProvider theme={theme}>
      <Projects />
    </ThemeProvider>,
  );

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

  // Testes específicos para cada projeto
  projects.forEach(({
    name, description, stack, repo, demo,
  }) => {
    describe(name, () => {
      it('Deve possuir um h3 com o nome do projeto', () => {
        const projectHeading = screen.getByRole('heading', { level: 3, name });

        expect(projectHeading).toBeInTheDocument();
      });

      it('Deve possuir um parágrafo com a descrição do projeto', () => {
        const projectDescription = screen.getByText(description);

        expect(projectDescription).toBeInTheDocument();
      });

      it('Deve possuir uma imagem', () => {
        const projectImage = screen.getByRole('img');

        expect(projectImage).toBeInTheDocument();
      });

      it('Deve possuir um h4 "Tecnologias usadas"', () => {
        const stackHeading = screen.getByRole('heading', { level: 4, name: 'Tecnologias usadas' });

        expect(stackHeading).toBeInTheDocument();
      });

      it('Deve haver os pops de tecnologias usadas', () => {
        const pops = stack.map((st) => screen.getByText(st));

        pops.forEach((pop) => {
          expect(pop).toBeInTheDocument();
        });
      });

      it('Deve haver o link para o repositório', () => {
        const repoLink = screen.getByRole('link', { name: 'Repositório' });

        expect(repoLink).toBeInTheDocument();
        expect(repoLink.href).toMatch(repo);
      });

      if (demo) {
        it('Deve haver o link para o repositório', () => {
          const demoLink = screen.getByRole('link', { name: 'Demonstração' });

          expect(demoLink).toBeInTheDocument();
          expect(demoLink.href).toMatch(demo);
        });
      }

      it('Clica no botão de próximo para mudar o projeto', () => {
        const nextButton = screen.getByRole('button', { name: 'próximo projeto' });

        expect(nextButton).toBeInTheDocument();
        userEvent.click(nextButton);
      });
    });
  });
});
