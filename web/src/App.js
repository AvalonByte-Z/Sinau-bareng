// Importing react and react router
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//login
import Login from "./pages/Login";

const App = () => {
  <Router>
    <Route path="/login" component={Login} />
  </Router>;
};

export default App;
