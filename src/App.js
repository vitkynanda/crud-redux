import React from "react";
import JumbotronComponent from "./components/JumbotronComponent";
import NavbarComponent from "./components/NavbarComponent";
import {
  CreateContainer,
  EditContainer,
  DetailContainer,
  HomeContainer,
} from "./containers";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <NavbarComponent />
        <JumbotronComponent />
        <Switch>
          <Route path="/detail/:id" component={DetailContainer} exact />
          <Route path="/edit/:id" component={EditContainer} exact />
          <Route path="/create" component={CreateContainer} exact />
          <Route path="/" exact>
            <HomeContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
