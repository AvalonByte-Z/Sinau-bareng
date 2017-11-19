import React from "react";
import { Container } from "reactstrap";

import Content from "./Content";

import backgroundAbout from "../img/IconAbout/backgroundhome.jpg";

import NavBarAbout from "../organisms/NavBar";
import Footer from "../organisms/Footer";

const styleBackground = {
  backgroundImage: `url(${backgroundAbout})`
};

const Layout = props => (
  <div style={styleBackground}>
    <NavBarAbout />
      <Content>{props.children}</Content>
    <Footer />
  </div>
);

export default Layout;
