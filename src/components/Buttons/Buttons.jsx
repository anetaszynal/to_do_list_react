import React from 'react';
import './style.css';

export const Buttons = ({ tasks, completeAll }) => (
  <div className="buttons">
    <button className="buttons__button">Pokaż ukończone</button>
    <button
      onClick={completeAll}
      className="buttons__button"
      disabled={tasks.every(({ done }) => done)}
    >
      Ukończ wszystkie
      </button>
  </div>
);