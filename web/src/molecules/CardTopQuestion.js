import React from "react"
import { CardBody, CardTitle } from "reactstrap"

import LinkToQuestion from "../atoms/LinkToQuestion"

const StyleList = {
  fontSize: "100px"
};

const CardTopAnswer = props => (

  <div className="d-flex flex-column left">
    <CardBody >
      <CardTitle className="StyleList">
        <LinkToQuestion question={props.question} />
      </CardTitle>
    </CardBody>
  </div>

)

export default CardTopAnswer
