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
import Logos from "../img/logo/LogoRev2.jpeg";
import Layout from "../templates/Layout";

//--------------------------------------------------------------------------------------

const StyleLogo = {
  width: "50%",
  height: "100%"
};

const styleForm = {
  width: "100%",
  height: "350px"
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
  <Col xs={12}>
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
            placeholder="Enter your email heree"
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

// LOGIN

const SignUp = () => (
  <Layout>
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
      </Row>
    </div>
  </Layout>
);
export default SignUp;
