import React from "react"
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  CardBody
} from "reactstrap";import axios from "axios"

import Link from "../atoms/Link"

import helpers from "../helpers"

const styleForm = {
  width: "100%",
  height: "350px"
};

const styleButton = {
  width: "90%",
  position: "absolute",
  bottom: "10px"
};

const ColumnLogin = () => (
  <Col xs={12}>
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
        <br />
        <Row>
          <Col xs={6}>
            <Button style={styleButton} color="success">
              Login
            </Button>
          </Col>
        </Row>
      </Form>
    </CardBody>
  </Col>
);

export default ColumnLogin
