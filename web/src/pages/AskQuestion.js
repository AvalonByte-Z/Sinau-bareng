import React from "react";
import { Col } from "reactstrap";

import Layout from "../templates/Layout";
import AskBar from "../organisms/AskBar";

const AskQuestion = () => (
  <Layout>
    <Col xs={12}>
      <AskBar />
    </Col>
  </Layout>
);

export default AskQuestion;
