import React from 'react';
import { Container } from './modules/Container';
import { Header } from './modules/Header';
import { Section } from './modules/Section';
import { Form } from './modules/Form';
import { Tasks } from './modules/Tasks';

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
        body={<Tasks />}
      />
    </Container>

  );
};

export default App;
