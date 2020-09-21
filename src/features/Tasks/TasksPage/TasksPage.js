import React from "react";
import {Container} from "../../../common/Container";
import {Header} from "../../../common/Header";
import {Section} from "../../../common/Section";
import {Form} from "./Form";
import {TasksList} from "./TasksList";
import {TasksButtons} from "../TasksPage/TasksButtons";
import {Search} from "./Search/Search";
import {FetchExampleTasksButton} from "../FetchExampleTasksButton/FetchExampleTasksButton";

export const TasksPage = () => {
    return (
        <Container>
            <Header title="Lista zadań"/>
            <Section
                title="Dodaj nowe zadanie"
                additionalContent={<FetchExampleTasksButton/>}
                body={<Form/>}
            />
            <Section title="Wyszukiwarka" body={<Search/>}/>
            <Section
                title="Lista zadań"
                additionalContent={<TasksButtons/>}
                body={<TasksList/>}
            />
        </Container>
    );
};
