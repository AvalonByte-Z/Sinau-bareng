// Importing react
import React from "react";

// Importing route
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//importing about pages
import Welcome from "./pages/Welcome";

// Importing masuk pages
import SignIn from "./pages/SignIn";

// Importing home pages
import Home from "./pages/Home";

// Importing answer pages
import Answer from "./pages/Answer";

// Importing question pages
// import Question from "./pages/Question";

// Importing AskQuestion pages
import AskQuestion from "./pages/AskQuestion";

// import ListQuestion from "./pages/ListQuestion";

// Importing profile pages
import Profile from "./pages/Profile";

// import ListProfile from "./pages/ListProfile";

// Importing notfound pages
import NotFound from "./pages/NotFound";

const App = () => (
  <Router>
    <Switch>
      <Route path="/SignIn" component={SignIn} />
      <Route exact path="/" component={Welcome} />
      <Route path="/home" component={Home} />
      <Route path="/Answer" component={Answer} />
      <Route path="/AskQuestion" component={AskQuestion} />
      <Route path="/profile/:id" component={Profile} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
export default App;
