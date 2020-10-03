import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchExampleTasks, selectIsLoading} from "../tasksSlice";
import {Button} from "../Button";

export const FetchExampleTasksButton = () => {
    const dispatch = useDispatch();
    const exampleTaskLoading = useSelector(selectIsLoading);

    return (
        <Button
            onClick={() => {
                dispatch(fetchExampleTasks());
            }}
            disabled={exampleTaskLoading}
        >
            {exampleTaskLoading ? "Loading..." : "Download sample tasks"}
        </Button>
    );
};
