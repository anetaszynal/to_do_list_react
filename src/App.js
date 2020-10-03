import React from "react";
import {Route, Switch, HashRouter, Redirect} from "react-router-dom";
import {TasksPage} from "./features/tasks/TasksPage/TasksPage";
import {TaskPage} from "./features/tasks/TaskPage";
import {AuthorPage} from "./features/author/AuthorPage";
import {StyledNavLink, List} from "./styled";
import {toAuthor, toTask, toTasks} from "./routes";

export const App = () => (
    <HashRouter>
        <nav>
            <List>
                <li>
                    <StyledNavLink to={toTasks()}>Tasks</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to={toAuthor()}>About the author</StyledNavLink>
                </li>
            </List>
        </nav>
        <Switch>
            <Route path={toTask()}>
                <TaskPage/>
            </Route>
            <Route path={toTasks()}>
                <TasksPage/>
            </Route>
            <Route path={toAuthor()}>
                <AuthorPage/>
            </Route>
            <Route>
                <Redirect to={toTasks()}/>
            </Route>
        </Switch>
    </HashRouter>
);
