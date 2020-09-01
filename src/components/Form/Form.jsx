import React, { useState, useRef } from "react";
import { FormContener, FormInput, FormButton } from "./styled";

export const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent);
    setNewTaskContent("");
    focusInput();
  };

  return (
    <FormContener onSubmit={onFormSubmit}>
      <FormInput
        ref={inputRef}
        placeholder="Co jest do zrobienia?"
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <FormButton>Dodaj zadanie</FormButton>
    </FormContener>
  );
};
