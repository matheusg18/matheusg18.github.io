import React from 'react';
import { render, screen } from '@testing-library/react';
import Skills from '.';

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

const toDataTestId = (skill) => `icon-${skill.split(' ').join('-')}`;

describe('Testes em Skills', () => {
  beforeEach(() => render(<Skills />));

  it('Deve conter um h2', () => {
    const heading = screen.getAllByRole('heading', { level: 2 });

    expect(heading).toBeInTheDocument();
  });

  // Cria o teste dos ícones
  skills.forEach((skill) => {
    it(`Deve conter o ícone de ${skill}`, () => {
      const icon = screen.getByTestId(toDataTestId(skill));
      const iconName = screen.getByText(new RegExp(skill, 'i'));

      expect(icon).toBeInTheDocument();
      expect(iconName).toBeInTheDocument();
    });
  });
});
