import React from "react";
import { Container } from "../../common/Container";
import { Header } from "../../common/Header";
import { Section } from "../../common/Section";
import { Form } from "../../features/tasks/Form";
import { TasksList } from "../../features/tasks/TasksList";
import { Buttons } from "../../features/tasks/Buttons";

export const Tasks = () => {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section
        title="Lista zadań"
        additionalContent={<Buttons />}
        body={<TasksList />}
      />
    </Container>
  );
};
