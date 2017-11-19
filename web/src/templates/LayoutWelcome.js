import React from "react";
import { Container } from "reactstrap";

import Content from "./Content";

import backgroundAbout from "../img/IconAbout/backgroundhome.jpg";

import NavBarWelcome from "../organisms/NavBarWelcome";
import Footer from "../organisms/Footer";

const styleBackground = {
  backgroundImage: `url(${backgroundAbout})`
};

const Layout = props => (
  <div style={styleBackground}>
    <NavBarWelcome />
    <Container>
      <Content>{props.children}</Content>
    </Container>
    <Footer />
  </div>
);

export default Layout;
