import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Skills from './components/Skills';
import Projects from './components/Projects';
import theme from './theme.styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <main>
          <Hero />
          <Sobre />
          <Skills />
          <Projects />
        </main>
      </>
    </ThemeProvider>
  );
}

export default App;
