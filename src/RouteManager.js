import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./UI/home_page/homePage";
import Projects from "./UI/pages/Projects";
import Books from "./UI/pages/Books";
import Resume from "./UI/pages/Resume";
import Blog from "./UI/pages/Blog";
import About from "./UI/pages/About";

const Main = (props) => {
  return (
    <BrowserRouter>
      <main className="container main-page">
        <Switch>
          <Route path="/" exact render={(props) => <HomePage {...props} />} />
          <Route path="/projects" render={(props) => <Projects {...props} />} />
          <Route path="/books" render={(props) => <Books {...props} />} />
          <Route path="/blog" render={(props) => <Blog {...props} />} />
          <Route path="/resume" render={(props) => <Resume {...props} />} />
          <Route path="/about" render={(props) => <About {...props} />} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default Main;
