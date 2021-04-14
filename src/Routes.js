import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Form from "./Pages/Form/Form";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Form} />
      </Switch>
    </Router>
  );
};

export default Routes;
