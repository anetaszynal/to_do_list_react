import React from 'react';
import { Container } from './modules/Container';
import { Header } from './modules/Header';
import { Section } from './modules/Section';
import { Form } from './modules/Form';

function App() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
      />
    </Container>

  );
};

export default App;
