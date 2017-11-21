import React from "react";
import {
  Col
} from "reactstrap";

import CardAnswer from "../molecules/CardAnswer"

import DATAQUESTIONS from "../data/questions";

const Home = () => (
  <Col xs={12}>
    {DATAQUESTIONS.map(question => {
      return question.answers.length > 0 && <CardAnswer question={question} />;
    })}
  </Col>
);

export default Home;
