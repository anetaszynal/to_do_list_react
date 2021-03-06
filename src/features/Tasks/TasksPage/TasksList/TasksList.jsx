import React from "react";
import {
    List,
    ListItem,
    StyledNavLink,
    ListButton,
    ListContent,
} from "./styled";
import {useSelector, useDispatch} from "react-redux";
import {
    toggleTaskDone,
    deleteTask,
    selectHideDone,
    selectTasksByQuery,
} from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";
import {useQueryParameter} from "../queryParameters";

export const TasksList = () => {
    const query = useQueryParameter(searchQueryParamName);
    const tasks = useSelector((state) => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(({id, done, content}) => (
                <ListItem key={id} hidden={done && hideDone}>
                    <ListButton onClick={() => dispatch(toggleTaskDone(id))}>
                        {done ? "✔" : ""}
                    </ListButton>
                    <ListContent done={done}>
                        <StyledNavLink to={`/tasks/${id}`}>{content}</StyledNavLink>
                    </ListContent>
                    <ListButton onClick={() => dispatch(deleteTask(id))} deleteTask>
                        🗑
                    </ListButton>
                </ListItem>
            ))}
        </List>
    );
};
