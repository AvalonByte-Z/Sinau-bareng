import React from "react";

import ListOfAnswers from "../organisms/ListOfAnswers";
import Layout from "../templates/Layout";
import Category from "../atoms/Category"

import {
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container
} from "reactstrap";

const div1 = {
  fontWeight: "bold",
  fontSize: "16px",
  padding: "20px"
};

const div2 = {
  float: "right",
};

const div3 = {
fontFamily: "lato",
width: "80%",
fontSize: "16px",
marginRight: "100px"
};

const Home = () => (
  <Layout>
      <Col xs={9}>
        <ListOfAnswers />;
      </Col>
      <Col xs={3}>
        <Category />
      </Col>
  </Layout>
);

<Row>

</Row>

export default Home;
