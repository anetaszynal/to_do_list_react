import React from "react";
import { Route, Switch, HashRouter, Redirect } from "react-router-dom";
import { TasksPage } from "./features/tasks/TasksPage/TasksPage";
import { TaskPage } from "./features/tasks/TaskPage";
import { AuthorPage } from "./features/author/AuthorPage";
import { StyledNavLink, List } from "./styled";

export const App = () => (
  <HashRouter>
    <nav>
      <List>
        <li>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </li>
      </List>
      <Switch>
        <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);
