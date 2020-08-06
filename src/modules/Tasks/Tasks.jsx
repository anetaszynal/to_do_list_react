import React from 'react';

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
    < ul >
      {tasks.map(({ id, content }) => (
        <li key={id}>{content}</li>
      ))}
    </ul>
  );
};