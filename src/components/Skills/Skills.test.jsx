import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Skills from '.';
import theme from '../../theme.styles';

const skills = [
  'react',
  'react testing library',
  'html',
  'javascript',
  'css',
  'docker',
  'jest',
  'nodejs',
  'redux',
  'git',
  'linux',
  'mysql',
  'styled components',
  'sass',
];

describe('Testes em Skills', () => {
  beforeEach(() => render(
    <ThemeProvider theme={theme}>
      <Skills />
    </ThemeProvider>,
  ));

  it('Deve conter um h2', () => {
    const heading = screen.getByRole('heading', { level: 2 });

    expect(heading).toBeInTheDocument();
  });

  // Cria o teste dos ícones
  skills.forEach((skill) => {
    it(`Deve conter o ícone de ${skill} e seu nome`, () => {
      const iconNameRegex = new RegExp(`^${skill}$`, 'i');
      const icon = screen.getByRole('img', { name: iconNameRegex });
      const iconName = screen.getByText(iconNameRegex);

      expect(icon).toBeInTheDocument();
      expect(iconName).toBeInTheDocument();
    });
  });
});
