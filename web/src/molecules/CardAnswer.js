import React from "react";
import {
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from "reactstrap";

import LinkToQuestion from "../atoms/LinkToQuestion";
import LinkToProfile from "../atoms/LinkToProfile";

const CardAnswer = props => (
  <Card
    style={{
      margin: "10px"
    }}
  >
    <CardBody key={props.question._id}>
      <CardTitle>
        <h3>
          <LinkToQuestion question={props.question} />
        </h3>
      </CardTitle>
      <CardSubtitle>
        <h6>
          Answered by{" "}
          <LinkToProfile user={props.question.answers[0].createdBy} />
        </h6>
      </CardSubtitle>
      <CardText>{props.question.answers[0].text}</CardText>
    </CardBody>
  </Card>
);

export default CardAnswer
