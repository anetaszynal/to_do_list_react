import React from "react";
import { Container } from "../../common/Container";
import { Header } from "../../common/Header";
import { Section } from "../../common/Section";
import { Form } from "../../features/Tasks/Form";
import { TasksList } from "../../features/Tasks/TasksList";
import { Buttons } from "../../features/Tasks/Buttons";

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
