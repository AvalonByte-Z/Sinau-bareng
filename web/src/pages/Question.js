import React from "react";
import { Col } from "reactstrap"
import axios from "axios"

import Layout from "../templates/Layout";

import QuestionCard from "../organisms/QuestionCard"


import helpers from "../helpers"

import LinkToProfile from "../atoms/LinkToProfile"

axios.defaults.baseURL = process.env.REACT_API_API_URL
axios.defaults.headers.common["Authorization"] = helpers.getToken()

const Question = () => (
  <Layout>
    <h1>AskQuestion</h1>;
  </Layout>
);

export default Question;
