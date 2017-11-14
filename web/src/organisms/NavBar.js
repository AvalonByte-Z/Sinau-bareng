import React from "react";
import { NavLink } from "react-router-dom";

import {
  Row,
  Col,
  Navbar,
  Button,
  Container,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";

const USER = {
  _id: 0,
  name: "Administrator"
};

const StyleNavbar = {
  backgroundColor: "#47B4F1",
  padding: "0",
  minHeight: "50px",
  maxWidth: "100%"
};

const StyleNavbarLeft = {
  padding: "0",
  fontSize: "90%",
  marginTop: "10px"
};

const StyleNavbarRight = {
  padding: "0",
  fontSize: "90%",
  marginTop: "5px"
};

const StyleIn = {
  marginRight: "50px",
  fontSize: "150%",
  fontWeight: "bold",
  textAlign: "center",
  color: "#345c7e"
};

const Home = () => (
  <div style={StyleNavbar}>
    <Container>
      <Row>
        <Col xs={11} style={StyleNavbarLeft}>
          <NavLink to="/" style={StyleIn}>
            {" "}
            Sinau-Bareng
          </NavLink>
          <NavLink to="/answer" style={StyleIn}>
            Answer
          </NavLink>
          <NavLink to="/AskQuestion" style={StyleIn}>
            Question
          </NavLink>
          <NavLink to="/answer" style={StyleIn}>
            Category
          </NavLink>
        </Col>

        <Col xs={1} style={StyleNavbarRight}>
          <Button color="info" to="/answer">
            Profile
          </Button>{" "}
        </Col>
      </Row>
    </Container>
  </div>

  // <nav
  //   style={{
  //     borderBottom: "1px solid black"
  //   }}
  // >
  //   <Row>
  //     <Col xs={4}>
  //       <NavLink exact to="/">
  //         Home
  //       </NavLink>
  //       <NavLink to="/answer">Answer Question</NavLink>
  //     </Col>
  //
  //     <Col xs={4}>
  //       <NavLink to="/">search bar</NavLink>
  //     </Col>
  //
  //     <Col xs={4}>
  //       <NavLink to="/AskQuestion">Ask Question</NavLink>
  //       <NavLink to="/ListQuestion">[List Question]</NavLink>
  //       <NavLink to={`/profile/${USER._id}`}>Profile</NavLink>
  //       <NavLink to="/ListProfile">[List Profile]</NavLink>
  //     </Col>
  //   </Row>
  // </nav>
);

export default Home;
