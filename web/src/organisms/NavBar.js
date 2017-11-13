import React from "react";
import { NavLink } from "react-router-dom";

import { Row, Col } from "reactstrap";

const USER = {
  _id: 0,
  name: "Administrator"
};

const Home = () => (
  <nav
    style={{
      borderBottom: "1px solid black"
    }}
  >
    <Row>
      <Col xs={4}>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/answer">Answer Question</NavLink>
      </Col>

      <Col xs={4}>
        <NavLink to="/">search bar</NavLink>
      </Col>

      <Col xs={4}>
        <NavLink to="/AskQuestion">Ask Question</NavLink>
        <NavLink to="/ListQuestion">[List Question]</NavLink>
        <NavLink to={`/profile/${USER._id}`}>Profile</NavLink>
        <NavLink to="/ListProfile">[List Profile]</NavLink>
      </Col>
    </Row>
  </nav>
);

export default Home;
