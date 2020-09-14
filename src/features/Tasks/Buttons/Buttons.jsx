import React from "react";
import { ButtonsContener, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasks,
  toggleHideDone,
  completeAll,
  fetchExampleTasks,
  selectHideDone,
} from "../tasksSlice";

export const Buttons = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  return (
    <ButtonsContener>
      <Button
        onClick={() => {
          dispatch(fetchExampleTasks());
        }}
      >
        Pobierz przykładowe zadania
      </Button>
      {tasks.length > 0 && (
        <>
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
        </>
      )}
    </ButtonsContener>
  );
};
