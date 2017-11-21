// Importing react
import React from "react";

// Importing route
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Importing layout
import Layout from "./templates/Layout";

//importing about pages
import Welcome from "./pages/Welcome";

// Importing masuk pages
import SignIn from "./pages/SignIn";

// Importing daftar pages
import SignUp from "./pages/SignUp";

// Importing home pages
import Home from "./pages/Home";

// Importing answer pages
import Answer from "./pages/Answer";

// Importing question pages
import Question from "./pages/Question";

// import AskQuestion from "./pages/AskQuestion";
// import ListQuestion from "./pages/ListQuestion";

// Importing profile pages
import Profile from "./pages/Profile";

// import ListProfile from "./pages/ListProfile";

// Importing notfound pages
import NotFound from "./pages/NotFound";

const App = () => (
  <Router>
    <Switch>
      <Route path="/welcome" component={Welcome} />
      <Route path="/SignIn" component={SignIn} />
      <Route path="/SignUp" component={SignUp} />
      <Route exact path="/" component={Home} />
      <Route path="/Answer" component={Answer} />
      <Route path="/Question" component={Question} />
      <Route path="/profile/:id" component={Profile} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
export default App;
