import React, { useState } from 'react';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { Form } from './components/Form';
import { Tasks } from './components/Tasks';
import { Buttons } from './components/Buttons';
import { useTasks } from './useTasks';

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const {
    tasks,
    addNewTask,
    toggleTaskDone,
    deleteTask,
    completeAll,
  } = useTasks();

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
        additionalContent={
          <Buttons
            tasks={tasks}
            completeAll={completeAll}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
          />
        }
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            toggleTaskDone={toggleTaskDone}
            deleteTask={deleteTask}
          />
        }
      />
    </Container>

  );
};

export default App;
