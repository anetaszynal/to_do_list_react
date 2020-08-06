import React from 'react';
import './style.css';
import { useState } from 'react';

export const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(newTaskContent)
    addNewTask(newTaskContent);
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        className="form__field"
        placeholder="Co jest do zrobienia?"
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  )
};