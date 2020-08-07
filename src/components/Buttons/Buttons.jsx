import React from 'react';
import './style.css';

export const Buttons = ({ tasks, completeAll, hideDone, toggleHideDone }) => (
  <div className="buttons">
    <button onClick={toggleHideDone} className="buttons__button">
      {hideDone ? "Pokaż" : "Ukryj"} ukończone
    </button>
    <button
      onClick={completeAll}
      className="buttons__button"
      disabled={tasks.every(({ done }) => done)}
    >
      Ukończ wszystkie
      </button>
  </div>
);