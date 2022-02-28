import React from 'react';
import { ThemeProvider } from 'styled-components';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Skills from './components/Skills';
import theme from './theme.styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Hero />
        <Sobre />
        <Skills />
      </main>
    </ThemeProvider>
  );
}

export default App;
