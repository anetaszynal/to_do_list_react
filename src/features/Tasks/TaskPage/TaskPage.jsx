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
            <Header title="Szczegóły zadania"/>
            <Section
                title={task ? task.content : "Nie znaleziono zadania 😥"}
                body={!!task && (
                    task.done
                        ? "Zadanie zostało ukończone. Gratuluję 😉"
                        : "Zadanie nie zostało jeszcze ukończone 😥"
                )}
            />
        </Container>
    );
};
