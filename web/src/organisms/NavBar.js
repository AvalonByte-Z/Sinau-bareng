import React from "react";
import { NavLink } from "react-router-dom";

import DropdownProfile from "../atoms/DropdownProfile";

import Logo from "../img/logo/LogoRev2.jpeg";

import { Nav, NavItem, Row, Col, Container } from "reactstrap";

const StyleIn = {
  fontFamily: "raleway",
  marginTop: "20px",
  marginRight: "30px",
  padding: "10",
  fontSize: "30px",
  color: "#345c7e",
  paddingtop: "15px",
  textAlign: "center",
};

class NavBar extends React.Component {
  render(){
    return(
      <div className="nav">
        <Container>
          <Row>
            <Col xs={3}>
              <a href="/">
                <img src={Logo} alt="logo" className="StyleLogo" />
              </a>
            </Col>

            <Col xs={8}>
              <NavLink to="/" style={StyleIn} className="navlink">
                Home
              </NavLink>

              <NavLink to="/Answer" style={StyleIn}>
                Answer
              </NavLink>
              <NavLink to="/AskQuestion" style={StyleIn}>
                Question
              </NavLink>
            </Col>

            <Col xs={1} className="StyleNavbarRight">
              {/* <Button color="info" to="/profil" style={StyleButton}>
                Profile
              </Button> */}
              <DropdownProfile />
            </Col>
          </Row>          
        </Container>
      </div>
    )
  }
}

export default NavBar;
