import React from "react";
import { Container } from "reactstrap";

import Content from "./Content";

import NavBar from "../organisms/NavBar";
import Footer from "../organisms/Footer";

const Layout = props => (
  <div>
    <NavBar />
    <Container>
      <Content>{props.children}</Content>
    </Container>
    <Footer />
  </div>
);

export default Layout;
