import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "../../tasksSlice";
import { FormButton } from "./styled";
import { FormInput, FormContener } from "../../Input/styled";

export const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const focusInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    focusInput();

    const trimmedTaskContent = newTaskContent.trim();
    if (trimmedTaskContent.length > 0) {
      dispatch(
        addTask({
          id: nanoid(),
          content: trimmedTaskContent,
          done: false,
        })
      );
      setNewTaskContent("");
    }
    return;
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
