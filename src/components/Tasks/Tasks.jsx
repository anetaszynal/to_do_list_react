import React from 'react';
import { List, ListItem, ListButton, ListContent } from './styled';

export const Tasks = ({ tasks, toggleTaskDone, deleteTask, hideDone }) => (
  <List>
    {tasks.map(({ id, done, content }) => (
      <ListItem
        key={id}
        hidden={done && hideDone}
      >
        <ListButton onClick={() => toggleTaskDone(id)}>
          {done ? "✔" : ""}
        </ListButton>
        <ListContent done={done}>
          {content}
        </ListContent>
        <ListButton
          onClick={() => deleteTask(id)}
          deleteTask
        >
          🗑
        </ListButton>
      </ListItem>
    ))}
  </List>
);
