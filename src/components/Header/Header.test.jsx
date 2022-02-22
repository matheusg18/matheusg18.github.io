import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '.';

describe('Testes no Header', () => {
  beforeEach(() => render(<Header />));

  it('Deve haver um link com meu nome', () => {
    const nameLink = screen.getByRole('link', { name: 'Matheus' });

    expect(nameLink).toBeInTheDocument();
  });

  it('Em telas grandes deve mostrar os links de navegação', () => {
    window.innerWidth = 1440;
    window.dispatchEvent(new Event('resize'));
    const links = screen.getAllByRole('link');

    expect(links).toHaveLength(4);
  });

  it('Em telas pequenas deve mostrar o mobile menu', () => {
    window.innerWidth = 375;
    window.dispatchEvent(new Event('resize'));
    const mobileMenu = screen.getByTestId('mobile-menu');

    expect(mobileMenu).toBeInTheDocument();
  });
});
