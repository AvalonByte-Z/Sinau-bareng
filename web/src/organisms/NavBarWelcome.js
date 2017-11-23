import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../img/logo/LogoRev2.jpeg";

import {
  Row,
  Col,
  Container
} from "reactstrap";

const StyleNavbar = {
  backgroundColor: "#47B4F1",
  padding: "0",
  minHeight: "65px",
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

const Home = () => (
  <div className="nav">
    <Container>
      <Row>
        <Col xs={3}>
          <a href="/">
            <img src={Logo} alt="logo" className="StyleLogo" />
          </a>
        </Col>
        <Col xs={6}>

        </Col>

        <Col xs={3} className="StyleNavbarRight">
          <NavLink to="/signin" style={StyleIn}>
            Masuk / Daftar
          </NavLink>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;
