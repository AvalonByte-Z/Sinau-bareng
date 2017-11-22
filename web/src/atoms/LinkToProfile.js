import React from "react"
import Link from "./Link"

const LinkToProfile = props => (
  <Link to={`/profile/${props.user.uID}`}>{props.user.name}</Link>
)

export default LinkToProfile
