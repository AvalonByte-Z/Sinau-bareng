import React from "react";
import { Button, Container, Row, Col, Input } from "reactstrap";

import IconFacebook from "../img/IconFooter/facebook.svg";
import IconInstagram from "../img/IconFooter/instagram.svg";
import IconSnapchat from "../img/IconFooter/snapchat.svg";
import IconTwitter from "../img/IconFooter/twitter.svg";
import IconYoutube from "../img/IconFooter/youtube.svg";

// -----------------------------------------------------------------------------

const styleFooter = {
  backgroundColor: "#47B4F1",
  minHeight: "250px"
};

const styleContainer = {
  marginTop: "20px",
  fontFamily: "lato",
  color: "#345c7e",
  fontSize: "90%"
};

const styleFootCaption = {
  margin: "auto",
  fontFamily: "lato",
  fontWeight: "bold",
  textAlign: "center",
  color: "#ffffff",
  borderBottom: "solid #345c7e"
};

const styleFootDown = {
  margin: "20px",
  fontFamily: "lato",
  fontSize: "90%",
  color: "#345c7e",
  minHeight: "25px",
  backgroundColor: "#ffffff"

};

const styleIcon = {
  width: "24px",
  marginRight: "20px"
};

// -----------------------------------------------------------------------------

const Footer = () => (
  <div>
    <div style={styleFooter}>
      <Container style={styleContainer}>
        <Row><br/></Row>
        <Row>
          <h3 style={styleFootCaption}>Sinau-Bareng</h3>
        </Row>

        <Row><br/></Row>
        <Row><br/></Row>
        <Row><br/></Row>

        <Row>
          <Col xs="2" />
          <Col xs="4">
            <p>
              Home <br />
              About <br />
              Features <br />
              Our teams <br />
              Contact us <br />
            </p>
          </Col>
          <Col xs="4">
            <h5>Get Our Latest information</h5>
            <Input type="type" name="select" id="exampleSelect" />{" "}
            <Button color="info"> Subscribe </Button>
            <br />
            <br />
          </Col>
          <Col xs="2" />
        </Row>

        <Row><br/></Row>
        <Row><br/></Row>

      </Container>
    </div>

    <div style={styleFootDown}>
      <Container>
        <Row>
          <Col xs="4">Copyright &copy;2017. Sinau Team.</Col>
          <Col xs="4" />
          <Col xs="4">
            <a href="facebook.com">
              <img src={IconFacebook} alt="facebook" style={styleIcon} />
            </a>
            <a href="instagram.com">
              <img src={IconInstagram} alt="instagram" style={styleIcon} />
            </a>
            <a href="snapchat.com">
              <img src={IconSnapchat} alt="snapchat" style={styleIcon} />
            </a>
            <a href="twitter.com">
              <img src={IconTwitter} alt="twitter" style={styleIcon} />
            </a>
            <a href="youtube.com">
              <img src={IconYoutube} alt="youtube" style={styleIcon} />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default Footer;
