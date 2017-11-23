import React from "react"
import { Card, CardBody, CardTitle } from "reactstrap"

import LinkToQuestion from "../atoms/LinkToQuestion"

const StyleLogo = {
  fontFamily: "raleway",
  marginTop: "20px",
  marginRight: "30px",
  padding: "10",
  fontSize: "30px",
  color: "#345c7e",
  paddingtop: "15px",
  textAlign: "center",
};

const CardTopAnswer = props => (

  <div className="d-flex flex-column left">
    <CardBody >
      <CardTitle>
        <LinkToQuestion question={props.question} className="StyleLogo"/>
      </CardTitle>
    </CardBody>
  </div>

)

export default CardTopAnswer
