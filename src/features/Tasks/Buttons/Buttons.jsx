import React from 'react';
import { ButtonsContener, Button } from './styled';

export const Buttons = ({ tasks, completeAll, hideDone, toggleHideDone }) => (
  tasks.length > 0 && (
    <ButtonsContener>
      <Button onClick={toggleHideDone}>
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
    </Button>
      <Button
        onClick={completeAll}
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </Button>
    </ButtonsContener>
  )

);