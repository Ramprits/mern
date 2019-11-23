import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import List from "../components/List";

const Layout = () => {
  return (
    <Switch>
      <Route path="/app/dashboard" component={List} />
    </Switch>
  );
};
export default withRouter(Layout);
