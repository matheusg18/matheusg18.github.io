import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Header from '.';
import theme from '../../theme.styles';

const renderHeader = () => {
  render(
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>,
  );
};

describe('Testes no Header', () => {
  it('Deve haver um link com meu nome', () => {
    act(renderHeader);
    const nameLink = screen.getByRole('link', { name: 'Matheus' });

    expect(nameLink).toBeInTheDocument();
  });

  it('Em telas grandes deve mostrar os links de navegação', () => {
    act(renderHeader);
    act(() => {
      window.innerWidth = 1440;
      window.dispatchEvent(new Event('resize'));
    });
    const links = screen.getAllByRole('link');

    expect(links).toHaveLength(4);
  });

  it('Em telas pequenas deve mostrar o mobile menu', () => {
    act(renderHeader);
    act(() => {
      window.innerWidth = 375;
      window.dispatchEvent(new Event('resize'));
    });
    const mobileMenu = screen.getByTestId('mobile-menu');

    expect(mobileMenu).toBeInTheDocument();
  });
});
