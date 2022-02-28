import React from 'react';
import { render, screen } from '@testing-library/react';
import Sobre from '.';

describe('Testes no Sobre', () => {
  beforeEach(() => render(<Sobre />));

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
