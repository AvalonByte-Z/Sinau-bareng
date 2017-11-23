import React from "react";

import ListOfQuestions from "../organisms/ListOfQuestions";
import Layout from "../templates/Layout";
import RightSideBar from "../organisms/RightSideBar";
import LeftSideBar from "../organisms/LeftSideBar";

import {
  Col
} from "reactstrap";

const Home = () => (
  <Layout>
    <Col xs={3}>
      <LeftSideBar />
    </Col>

    <Col xs={6}>
      <ListOfQuestions />
    </Col>

    <Col xs={3}>
      <RightSideBar />
    </Col>
  </Layout>
);

export default Home;
