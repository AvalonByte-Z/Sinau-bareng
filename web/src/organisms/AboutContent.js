import React from "react";
import { Col, Container, Row } from "reactstrap";

import Iconhome1 from "../img/IconAbout/lightbulb.png";
import Iconhome2 from "../img/IconAbout/discussion.png";
import Iconhome3 from "../img/IconAbout/book.png";

const styleIconAbout = {
  width: "100%",
  marginRight: "20px"
};

const styleAbout = {
  margin: "20px",
  fontFamily: "lato",
  fontSize: "90%",
  color: "#345c7e"
};

const styleRow1 = {
  margin: "auto",
  padding: "14px",
  fontFamily: "lato",
  fontWeight: "bold",
  textAlign: "center",
  color: "#ffffff"
};

const styleRow2 = {
  margin: "auto",
  padding: "14px",
  fontFamily: "lato",
  fontWeight: "bold",
  textAlign: "center"
};

const About = () => (
  <div>
    <br />
    <br />
    <div style={styleAbout}>
      <Container>
        <Row>
          <h1 style={styleRow1}>Apasih arti SINAU?</h1>
        </Row>
        <br />
        <br />
        <br />
        <Row>
          <h4 style={styleRow1}>Kata SINAU artinya ada BELAJAR.</h4>
        </Row>
        <Row>
          <h4 style={styleRow1}>
            Di sini kamu bisa bertanya, berdiskusi dan membantu memecahkan soal
            pelajaran di sekolah.
          </h4>
        </Row>
        <Row>
          <h4 style={styleRow1}>Belajar bareng tentunya lebih seru!</h4>
        </Row>
        <Row>
          <Col xs="4">
            <img src={Iconhome1} alt="icon2" style={styleIconAbout} />
            <h4 style={styleRow1}>Tanya disini</h4>
          </Col>
          <Col xs="4">
            <img src={Iconhome2} alt="icon2" style={styleIconAbout} />
            <h4 style={styleRow1}>Berdiskusi dengan yang lain</h4>
          </Col>
          <Col xs="4">
            <img src={Iconhome3} alt="icon1" style={styleIconAbout} />
            <h4 style={styleRow1}>Bagikan ilmumu</h4>
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
