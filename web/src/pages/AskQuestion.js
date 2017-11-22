import React from "react";
import { Col } from "reactstrap";

import Layout from "../templates/Layout";
import AskBar from "../organisms/AskBar";

const AskQuestion = props => {
  const user = props.user

  return (
  <Layout>
    <Col xs={12}>
      <AskBar user={user}/>
    </Col>
  </Layout>
  );

}


export default AskQuestion;
