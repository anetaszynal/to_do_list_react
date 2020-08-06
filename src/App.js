import React, { useState } from 'react';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { Form } from './components/Form';
import { Tasks } from './components/Tasks';
import { Buttons } from './components/Buttons';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, content: "przepisać to do List", done: false },
    { id: 2, content: "przepisać currecy office", done: true }
  ]);

  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks,
      {
        id: tasks.length + 1,
        content,
        done: false
      }
    ]);
  };

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={
          <Form
            addNewTask={addNewTask}
          />
        }
      />
      <Section
        title="Lista zadań"
        additionalContent={<Buttons />}
        body={
          <Tasks
            tasks={tasks}
          />
        }
      />
    </Container>

  );
};

export default App;
