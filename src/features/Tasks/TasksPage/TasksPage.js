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
            <Header title="To-do list"/>
            <Section
                title="Add a new task"
                additionalContent={<FetchExampleTasksButton/>}
                body={<Form/>}
            />
            <Section title="Search tasks" body={<Search/>}/>
            <Section
                title="To-do list"
                additionalContent={<TasksButtons/>}
                body={<TasksList/>}
            />
        </Container>
    );
};
