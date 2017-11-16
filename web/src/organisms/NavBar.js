import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../img/logo/LogoRev2.jpeg";

import { Row, Col, Button, Container } from "reactstrap";

const StyleNavbar = {
  backgroundColor: "#47B4F1",
  padding: "0",
  minHeight: "50px",
  maxWidth: "100%"
};

const StyleNavbarLeft = {
  padding: "10",
  fontSize: "90%",
  marginTop: "10px"
};

const StyleNavbarRight = {
  padding: "10",
  fontSize: "90%",
  marginTop: "10px"
};

const StyleIn = {
  marginRight: "50px",
  fontSize: "150%",
  fontWeight: "bold",
  textAlign: "center",
  color: "#345c7e"
};

const StyleLogo = {
  width: "10%",
  height: "100%"
};

const Home = () => (
  <div style={StyleNavbar}>
    <Container>
      <Row>
        <Col xs={11} style={StyleNavbarLeft}>
          {/* <NavLink to="/" style={StyleIn}>
            {" "}
            Sinau-Bareng
          </NavLink> */}

          <a href="/">
            <img src={Logo} alt="logo" style={StyleLogo} />
          </a>

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
