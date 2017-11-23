import React from "react"
import { CardBody, CardTitle } from "reactstrap"

import AnswerBox from "./AnswerBox"

import LinkToQuestion from "../atoms/LinkToQuestion"

const CardAnswer = props => (

  <div className="d-flex flex-column left">
    <CardBody>
      <CardTitle>
        <LinkToQuestion question={props.question} />
      </CardTitle>
      <AnswerBox />
    </CardBody>
  </div>

)

export default CardAnswer
