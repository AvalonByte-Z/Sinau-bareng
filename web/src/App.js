// Importing react
import React from "react";

// Importing router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Importing layout
import Layout from "./templates/Layout";

// Importing login pages
import Login from "./pages/Login";

// Importing home pages
import Home from "./pages/Home";

// Importing answer pages
import Answer from "./pages/Answer";

// Importing question pages
import Question from "./pages/Question";
import AskQuestion from "./pages/AskQuestion";
import ListQuestion from "./pages/ListQuestion";

// Importing profile pages
import Profile from "./pages/Profile";
import ListProfile from "./pages/ListProfile";

// Importing notfound pages
import NotFound from "./pages/NotFound";

//importing about pages
import About from "./pages/About";

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="/answer" component={Answer} />
        <Route path="/question" component={Question} />
        <Route path="/askquestion/" component={AskQuestion} />
        <Route path="/listquestion/" component={ListQuestion} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/listprofile" component={ListProfile} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>
);
export default App;
