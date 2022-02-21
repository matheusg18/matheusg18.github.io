import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '.';

describe('Testes no Hero', () => {
  beforeEach(() => render(<Hero />));

  it('Deve conter a minha foto', () => {
    const picture = screen.findByRole('img', { name: 'Matheus Santos' });

    expect(picture).toBeInTheDocument();
  });

  it('Deve conter o texto de apresentação', () => {
    const text = screen.findByRole('heading', { level: 1 });

    expect(text).toBeInTheDocument();
    expect(text.innerHTML).toMatch(/matheus/i);
  });

  it('Deve conter o ícone do Github', () => {
    const githubIcon = screen.getByRole('link', { name: 'github' });

    expect(githubIcon).toBeInTheDocument();
    expect(githubIcon.href).toMatch('https://github.com/matheusg18');
  });

  it('Deve conter o ícone do Linkedin', () => {
    const linkedinIcon = screen.getByRole('link', { name: 'linkedin' });

    expect(linkedinIcon).toBeInTheDocument();
    expect(linkedinIcon.href).toMatch('https://www.linkedin.com/in/matheusg18/');
  });

  it('Deve conter o ícone do Gmail', () => {
    const gmailIcon = screen.getByRole('link', { name: 'gmail' });

    expect(gmailIcon).toBeInTheDocument();
    expect(gmailIcon.href).toMatch('mailto:matheusgabriel.18@gmail.com');
  });
});
