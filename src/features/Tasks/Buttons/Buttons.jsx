import React from "react";
import { ButtonsContener, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, completeAll } from "../tasksSlice";

export const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    tasks.length > 0 && (
      <ButtonsContener>
        <Button
          onClick={() => {
            dispatch(toggleHideDone());
          }}
        >
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Button>
        <Button
          onClick={() => {
            dispatch(completeAll());
          }}
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </Button>
      </ButtonsContener>
    )
  );
};
