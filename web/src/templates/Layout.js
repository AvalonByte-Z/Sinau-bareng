import React from "react";
import { Container } from "reactstrap";

import Content from "./Content";

import NavBar from "../organisms/NavBar";
import Footer from "../organisms/Footer";

const Layout = props => (
  <Container>
    <NavBar />
    <Content>{props.children}</Content>
    <Footer />
  </Container>
);

export default Layout;
