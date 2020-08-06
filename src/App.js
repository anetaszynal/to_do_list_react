import React from 'react';
import { Container } from './modules/Container';
import { Header } from './modules/Header';
import { Section } from './modules/Section';

function App() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
      />
      <Section
        title="Lista zadań"
      />
    </Container>

  );
};

export default App;
