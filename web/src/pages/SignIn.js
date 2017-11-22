import React from "react";
import {  Row,  Col} from "reactstrap";

import Logos from "../img/logo/LogoRev2.jpeg";

import LayoutSignIn from "../templates/LayoutSignIn";
import ColumnLogin from "../organisms/ColumnLogin"
import ColumnSignup from "../organisms/ColumnSignup"

import helpers from "../helpers"

//--------------------------------------------------------------------------------------

const StyleLogo = {
  width: "50%",
  height: "100%"
};

const styleTest = {
  fontFamily: "raleway"
};


//--------------------------------------------------------------------------------------

// LOGO
const Logo = () => (
  <h1>
    <a href="/">
      <img src={Logos} alt="logo" style={StyleLogo} />
    </a>{" "}
  </h1>
);

const Tagline = () => <h2 style={styleTest}>Diskusikan pelajaranmu disini</h2>;

export default class SignIn extends React.Component {
  componentWillMount() {
    helpers.deleteToken();
  }
  render () {
    return (
      <LayoutSignIn>
        <div>
          <Row className="text-center" id="row-logo">
            <Col>
              <Logo />
            </Col>
          </Row>

          <Row className="text-center" id="row-tagline">
            <Col>
              <Tagline />
            </Col>
          </Row>

          <hr />

          <Row className="center" id="row-auth">
            <Col xs={6}>
              <ColumnLogin />
            </Col>

            <Col xs={6}>
              <ColumnSignup />
            </Col>

          </Row>
        </div>
      </LayoutSignIn>
    )
  }

}
