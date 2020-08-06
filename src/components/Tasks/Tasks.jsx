import React from 'react';
import './style.css';

export const Tasks = ({ tasks }) => (
  < ul className="tasksList" >
    {tasks.map(({ id, content }) => (
      <li key={id} className="tasksList__item">
        <button className="tasksList__button"></button>
        <span className="taskList__content">{id}{content}</span>
        <button
          className="tasksList__button tasksList__button--deleteTask"
        >
          🗑
          </button>
      </li>
    ))}
  </ul>
);
