import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Blank from "./components/Blank";
import List from "./components/List";
//TODO Web Template Studio: Add routes for your new pages here.
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/List" />
          </Route>
          <Route path="/Blank" component={Blank} />
          <Route path="/List" component={List} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
