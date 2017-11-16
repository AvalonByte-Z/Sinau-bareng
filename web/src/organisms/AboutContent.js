import React from "react";
import {
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Container,
  Row
} from "reactstrap";

import backgroundhome from "../img/IconAbout/backgroundhome.jpg";
import Iconhome1 from "../img/IconAbout/book.png";
import Iconhome2 from "../img/IconAbout/discussion.png";
import Iconhome3 from "../img/IconAbout/lightbulb.png";

const styleIconAbout = {
  width: "6%",
  marginRight: "20px"
};

const styleIcon = {
  width: "6%",
  marginRight: "20px"
};

const styleBackground = {
  width: "100%",
  height: "100%"
};

const styleAbout = {
  margin: "20px",
  fontFamily: "lato",
  fontSize: "90%",
  color: "#345c7e"
};

const About = () => (
  <div>
    {/* <div style={{ backgroundImage: `url(${this.state.image})` }} /> */}
    <img src={backgroundhome} alt="backgroundhome" style={styleBackground} />

    <div style={styleAbout}>
      <Container>
        <Row>
          <Col xs="4">
            <img src={Iconhome1} alt="icon1" style={styleIconAbout} />
            <img src={Iconhome2} alt="icon2" style={styleIconAbout} />
            <img src={Iconhome3} alt="icon3" style={styleIconAbout} />
          </Col>
        </Row>
      </Container>
    </div>
    <row>
      <br />
    </row>
  </div>
);

export default About;
