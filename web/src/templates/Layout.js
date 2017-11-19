import React from "react";
import { Container } from "reactstrap";

import Content from "./Content";
import NavBar from "../organisms/NavBar";
import Footer from "../organisms/Footer";


const ContainerStyle = {
  margin: "0 auto",
}

const styleCanvas={
  backgroundColor: "#f6f9fa"
}

const Layout = props => (
  <div style={styleCanvas}>
    <NavBar />
    <Container style={ContainerStyle}>
      <Content>{props.children}</Content>
    </Container>
    <Footer />
  </div>
);

export default Layout;
