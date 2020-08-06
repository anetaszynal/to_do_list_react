import React from 'react';
import './style.css';

export const Tasks = () => {
  const tasks = [
    {
      id: 1,
      content: "przepisać to do List",
      done: false
    },
    {
      id: 2,
      content: "przepisać currecy office",
      done: true
    }
  ]
  return (
    < ul className="tasksList" >
      {tasks.map(({ id, content }) => (
        <li key={id} className="tasksList__item">
          <button className="tasksList__button"></button>
          <span className="taskList__content">{content}</span>
          <button
            className="tasksList__button tasksList__button--deleteTask"
          >
            🗑
          </button>
        </li>
      ))}
    </ul>
  );
};