import React from 'react';
import './style.css';

export const Tasks = ({ tasks, toggleTaskDone, deleteTask, hideDone }) => (
  < ul className="tasksList" >
    {tasks.map(({ id, done, content }) => (
      <li
        key={id}
        className={`tasksList__item ${done && hideDone ? "tasksList__item--hidden" : ""}`}
      >
        <button onClick={() => toggleTaskDone(id)} className="tasksList__button">
          {done ? "✔" : ""}
        </button>
        <span
          className={done ? "tasksList__content--done" : ""}>
          {id} - {content}
        </span>
        <button
          onClick={() => deleteTask(id)}
          className="tasksList__button tasksList__button--deleteTask"
        >
          🗑
          </button>
      </li>
    ))}
  </ul>
);
