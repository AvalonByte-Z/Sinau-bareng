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
  marginTop: "5px",
  float: "right"
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

          {/* <NavLink to="/" style={StyleIn}>
            <img width="40" src="../img/LogoRev2.jpeg" />
          </NavLink> */}

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
);

export default Home;
