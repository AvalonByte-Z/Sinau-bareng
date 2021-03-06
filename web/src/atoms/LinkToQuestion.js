import React from "react"
import Link from "./Link"

const LinkToQuestion = props => (
  <Link to={`/question/${props.question.id}`}>{props.question.title}</Link>
)

export default LinkToQuestion
