import React, { useState } from "react";
import { Route, Switch, Redirect, HashRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Login from "./pages/login";
import Layout from "./pages/layout";
const isAuthenticated = true;

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <HashRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/app/dashboard" />}
          />
          <Route
            exact
            path="/app"
            render={() => <Redirect to="/app/dashboard" />}
          />
          <PrivateRoute path="/app" component={Layout} />
          <PublicRoute path="/login" component={Login} />
          <Route component={Error} />
        </Switch>
      </HashRouter>
    </React.Fragment>
  );
};

function PrivateRoute({ component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          React.createElement(component, props)
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location
              }
            }}
          />
        )
      }
    />
  );
}

function PublicRoute({ component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Redirect
            to={{
              pathname: "/"
            }}
          />
        ) : (
          React.createElement(component, props)
        )
      }
    />
  );
}

export default App;
