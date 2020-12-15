import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./UI/home_page/homePage";
import Resume from "./UI/pages/Resume";
import Projects from "./UI/pages/Projects";

const Main = (props) => {
  return (
    <BrowserRouter>
      <main className="container main-page">
        <Switch>
          <Route path="/" exact render={(props) => <HomePage {...props} />} />
          <Route path="/projects" render={(props) => <Projects {...props} />} />
          <Route path="/resume" render={(props) => <Resume {...props} />} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default Main;
