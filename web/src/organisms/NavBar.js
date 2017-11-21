import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../img/logo/LogoRev2.jpeg";

import { Row, Col, Button, Container } from "reactstrap";

const StyleNavbar = {
  backgroundColor: "#47B4F1",
  padding: "0",
  minHeight: "75px",
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
  fontFamily: "raleway",
  marginTop: "20px",
  marginRight: "30px",
  padding: "10",
  fontSize: "30px",
  color: "#345c7e"
};

const StyleButton = {
  fontFamily: "raleway",
  marginLeft: "30px",
  padding: "10",
  fontSize: "20px",
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

          <a href="/">
            <img src={Logo} alt="logo" style={StyleLogo} />
          </a>

          <NavLink to="/" style={StyleIn}>
            Home
          </NavLink>

          <NavLink to="/Answer" style={StyleIn}>
            Answer
          </NavLink>
          <NavLink to="/AskQuestion" style={StyleIn}>
            Question
          </NavLink>

        </Col>

        <Col xs={1} style={StyleNavbarRight}>
          <Button color="info" to="/profil" style={StyleButton}>
            Profile
          </Button>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;
