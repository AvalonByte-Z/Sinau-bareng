import React from "react";
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  CardBody
} from "reactstrap";
import { Link } from "react-router-dom";
import Logos from "../img/logo/LogoRev2.jpeg";

//--------------------------------------------------------------------------------------

const StyleLogo = {
  width: "50%",
  height: "100%"
};

const styleForm = {
  width: "100%",
  height: "350px"
};

const styleInput = {
  border: "none",
  borderBottom: "1px solid #CFD8DC"
};

const styleButton = {
  width: "90%",
  position: "absolute",
  bottom: "10px"
};

const styleText = {
  fontFamily: "lato",
  width: "80%",
  fontSize: "16px",
  margin: "0px auto"
};

const styleHead = {
  fontFamily: "raleway",
  fontSize: "16px",
  margin: "0px",
  fontWeight: "bold",
  borderBottom: "solid #1DE9B6",
  marginRight: "240px"
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

//HEADER

const Tagline = () => <h2 style={styleTest}>Diskusikan pelajaranmu disini</h2>;

// COLUMN_SIGNUP

const ColumnSignup = () => (
  <Col xs={6}>
    <CardBody>
      <h3>Sign Up</h3>
      <Form style={styleForm}>
        <FormGroup>
          <Label for="signupFullName">Full Name</Label>
          <Input
            type="email"
            name="signupFullName"
            id="signupFullName"
            placeholder="Enter your fullname here"
          />
        </FormGroup>
        <FormGroup>
          <Label for="signupEmail">Email</Label>
          <Input
            type="email"
            name="signupEmail"
            id="signupEmail"
            placeholder="Enter your email here"
          />
        </FormGroup>
        <FormGroup>
          <Label for="signupPassword">Password</Label>
          <Input
            type="password"
            name="signupPassword"
            id="signupPassword"
            placeholder="Enter your password here"
          />
        </FormGroup>
        <Button>Sign Up</Button>
      </Form>
    </CardBody>
  </Col>
);

// COLUMN_LOGIN

const ColumnLogin = () => (
  <Col xs={6}>
    <CardBody>
      <h3>Login</h3>
      <Form style={styleForm}>
        <FormGroup>
          <Label for="loginEmail">Email</Label>
          <Input
            type="email"
            name="loginEmail"
            id="loginEmail"
            placeholder="Enter your email here"
          />
        </FormGroup>
        <FormGroup>
          <Label for="loginPassword">Password</Label>
          <Input
            type="password"
            name="loginPassword"
            id="loginPassword"
            placeholder="Enter your password here"
          />
        </FormGroup>
        <br />
        <FormGroup>
          <Link to="/forgot">Forgot password?</Link>
        </FormGroup>
        <br />
        <Button>Login</Button>
      </Form>
    </CardBody>
  </Col>
);

// LOGIN

const Login = () => (
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
      <ColumnSignup />
      <ColumnLogin />
    </Row>
  </div>
);
export default Login;
