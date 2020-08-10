import React, { useState, useRef } from 'react';
import { FormContener, FormInput, FormButton } from './styled';

export const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const formFocus = useRef(null);

  const onFormSubmit = (event) => {
    const trimmedTaskContent = newTaskContent.trim();
    event.preventDefault();
    if (trimmedTaskContent.length > 0) {
      addNewTask(trimmedTaskContent);
      setNewTaskContent("")
    }
    return;
  };

  return (
    <FormContener onSubmit={onFormSubmit}>
      <FormInput
        ref={formFocus}
        placeholder="Co jest do zrobienia?"
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <FormButton onClick={() => formFocus.current.focus()}>Dodaj zadanie</FormButton>
    </FormContener>
  )
};