import React from "react";

import ListOfAnswers from "../organisms/ListOfAnswers";
import Layout from "../templates/Layout";
import RightSideBar from "../organisms/RightSideBar";


import {
  Col
} from "reactstrap";

const Home = () => (
  <Layout>
    <Col xs={9}>
      <ListOfAnswers />
    </Col>

    <Col xs={3}>
      <RightSideBar />
    </Col>
  </Layout>
);

export default Home;
