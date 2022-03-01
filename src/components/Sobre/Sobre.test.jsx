import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Sobre from '.';
import theme from '../../theme.styles';

describe('Testes no Sobre', () => {
  beforeEach(() => render(
    <ThemeProvider theme={theme}>
      <Sobre />
    </ThemeProvider>,
  ));

  it('Deve possuir um h2', () => {
    const sobreHeading = screen.getByRole('heading', { level: 2 });

    expect(sobreHeading).toBeInTheDocument();
  });

  it('Deve conter 3 parágrafos', () => {
    const paragraphs = [
      screen.getByText(/Meu nome é Matheus Santos/),
      screen.getByText(/Entrei para a Trybe/),
      screen.getByText(/No tempo livre/),
    ];

    paragraphs.forEach((paragraph) => {
      expect(paragraph).toBeInTheDocument();
    });
  });

  it('Deve ter uma imagem de ilustração', () => {
    const illustration = screen.getByRole('img');

    expect(illustration).toBeInTheDocument();
  });

  it('Deve conter um botão para acessar o currículo pelo google drive', () => {
    const cvLink = screen.getByRole('link');

    expect(cvLink).toBeInTheDocument();
    expect(cvLink.href).toMatch(/drive.google.com/);
  });
});
