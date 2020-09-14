import React from "react";
import { List, ListItem, ListButton, ListContent } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasks,
  toggleTaskDone,
  deleteTask,
  selectHideDone,
} from "../tasksSlice";

export const TasksList = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map(({ id, done, content }) => (
        <ListItem key={id} hidden={done && hideDone}>
          <ListButton onClick={() => dispatch(toggleTaskDone(id))}>
            {done ? "✔" : ""}
          </ListButton>
          <ListContent done={done}>{content}</ListContent>
          <ListButton onClick={() => dispatch(deleteTask(id))} deleteTask>
            🗑
          </ListButton>
        </ListItem>
      ))}
    </List>
  );
};
