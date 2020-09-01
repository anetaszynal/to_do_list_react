import React, { useState } from "react";
import { Container } from "./common/Container";
import { Header } from "./common/Header";
import { Section } from "./common/Section";
import { Form } from "./features/Tasks/Form";
import { Tasks } from "./features/Tasks/TasksList";
import { Buttons } from "./features/Tasks/Buttons";
import { useTasks } from "./useTasks";

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
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
        body={<Form addNewTask={addNewTask} />}
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
}

export default App;
