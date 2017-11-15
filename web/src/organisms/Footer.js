import React from "react";
import { Button, Container, Row, Col, Input } from "reactstrap";

import IconFacebook from "../img/icon/facebook.svg";
import IconInstagram from "../img/icon/instagram.svg";
import IconSnapchat from "../img/icon/snapchat.svg";
import IconTwitter from "../img/icon/twitter.svg";
import IconYoutube from "../img/icon/youtube.svg";

// -----------------------------------------------------------------------------

const styleFooter = {
  backgroundColor: "#47B4F1"
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
  color: "#345c7e"
};

const styleFootDown = {
  margin: "20px",
  fontFamily: "lato",
  fontSize: "90%",
  color: "#345c7e"
};

const styleIcon = {
  width: "6%",
  marginRight: "20px"
};

// -----------------------------------------------------------------------------

const Footer = () => (
  <div>
    <div style={styleFooter}>
      <Container style={styleContainer}>
        <br />
        <Row>
          <h3 style={styleFootCaption}>Sinau-Bareng</h3>
        </Row>

        <br />
        <Container>
          <Row>
            <Col xs="1" />
            <Col xs="4">
              <p>
                Home <br />
                About <br />
                Features <br />
                Our teams <br />
                Contact us <br />
              </p>
            </Col>
            <Col xs="2" />
            <Col xs="4">
              <h5>Get Our Latest information</h5>
              <Input type="type" name="select" id="exampleSelect" />{" "}
              <Button color="info"> Subscribe </Button>
              <br />
              <br />
            </Col>
          </Row>
        </Container>
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
    <row>
      <br />
    </row>
  </div>
);

export default Footer;
