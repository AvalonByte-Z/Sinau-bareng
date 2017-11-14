import React from "react";
import { Button, Container, Row, Col } from "reactstrap";

// ----------------------------------------------------------------------------------

const styleFooter = {
  marginTop: "20px",
  borderTop: "1px solid black"
};

const Footer = () => (
  <div>
    <div style={styleFooter}>
      <small>2017 &copy; Sinau Company</small>
    </div>
  </div>
);

export default Footer;
