import React from "react";
import {Container} from "./styled";
import {Button} from "../../Button";
import {useSelector, useDispatch} from "react-redux";
import {
    selectTasks,
    toggleHideDone,
    completeAll,
    selectHideDone,
} from "../../tasksSlice";

export const TasksButtons = () => {
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

    return (
        <Container>
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
                        disabled={tasks.every(({done}) => done)}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </Container>
    );
};
