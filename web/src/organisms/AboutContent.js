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

// import backgroundhome from "../img/about/backgroundhome.jpg";
// import Iconhome1 from "../img/about/Iconhome1.png";
// import Iconhome2 from "../img/about/Iconhome2.png";
// import Iconhome3 from "../img/about/Iconhome3.png";
import IconFacebook from "../img/icon/facebook.svg";

const styleIconAbout = {
  width: "6%",
  marginRight: "20px"
};

const styleIcon = {
  width: "6%",
  marginRight: "20px"
};

const styleAbout = {
  margin: "20px",
  fontFamily: "lato",
  fontSize: "90%",
  color: "#345c7e"
};

const About = () => (
  <div>
    <div style={styleAbout}>
      <Container>
        <Row>
          <Col xs="4">Copyright &copy;2017. Sinau Team.</Col>
          <Col xs="4" />
          <Col xs="4">
            {/* <img
              src={backgroundhome}
              alt="backgroundhome"
              style={styleIconAbout}
            />
            <img src={Iconhome1} alt="icon1" style={styleIconAbout} />
            <img src={Iconhome2} alt="icon2" style={styleIconAbout} />
            <img src={Iconhome3} alt="icon3" style={styleIconAbout} /> */}
            <a href="facebook.com">
              <img src={IconFacebook} alt="facebook" style={styleIcon} />
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

export default About;
