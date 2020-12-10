import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./UI/home_page/homePage";

const Main = (props) => {
  return (
    <BrowserRouter>
      <main className="container main-page">
        <Switch>
          <Route path="/" render={(props) => <HomePage {...props} />} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default Main;
