import React from "react";

import ListOfAnswers from "../organisms/ListOfAnswers";
import ListOfQuestions from "../organisms/ListOfQuestions";
import Layout from "../templates/Layout";
import RightSideBar from "../organisms/RightSideBar";


import {
  Col
} from "reactstrap";

const Home = () => (
  <Layout>
    <Col xs={9}>
      <ListOfQuestions />
    </Col>

    <Col xs={3}>
      <RightSideBar />
    </Col>
  </Layout>
);

export default Home;
