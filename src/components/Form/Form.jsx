import React, { useRef } from 'react';
import './style.css';
import { useState } from 'react';

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
    <form className="form" onSubmit={onFormSubmit}>
      <input
        ref={formFocus}
        className="form__field"
        placeholder="Co jest do zrobienia?"
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <button onClick={() => { formFocus.current.focus() }} className="form__button">Dodaj zadanie</button>
    </form>
  )
};