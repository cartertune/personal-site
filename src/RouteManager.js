import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./UI/home_page/homePage";
import Projects from "./UI/projects/Projects";

const Main = (props) => {
  return (
    <BrowserRouter>
      <main className="container main-page">
        <Switch>
          <Route path="/" exact render={(props) => <HomePage {...props} />} />
          <Route path="/projects" render={(props) => <Projects {...props} />} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default Main;
