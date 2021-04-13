import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Form from "./Pages/Form";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/account" component={Form} />
      </Switch>
    </Router>
  );
};

export default Routes;
