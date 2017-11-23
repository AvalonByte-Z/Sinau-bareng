import React from "react"
import { CardBody, CardTitle } from "reactstrap"

import LinkToQuestion from "../atoms/LinkToQuestion"

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
