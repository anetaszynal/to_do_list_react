import React from "react";
import {Container} from "../../../common/Container";
import {Section} from "../../../common/Section";
import {Header} from "../../../common/Header";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {getTaskById} from "../tasksSlice";

export const TaskPage = () => {
    const {id} = useParams();
    const task = useSelector((state) => getTaskById(state, id));

    return (
        <Container>
            <Header title="Task details"/>
            <Section
                title={task ? task.content : "Task not found 😥"}
                body={!!task && (
                    task.done
                        ? "The task has been completed. Congratulations 😉"
                        : "The task has not yet been completed 😥"
                )}
            />
        </Container>
    );
};
