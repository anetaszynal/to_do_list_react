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
  const [hideDone, setHideDone] = useState(false);

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

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    }));
  };

  const deleteTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const completeAll = () => {
    setTasks(tasks => tasks.map(task => ({ ...task, done: true })))
  };

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
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
