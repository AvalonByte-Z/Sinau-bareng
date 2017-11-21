import React from "react"
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  CardBody
} from "reactstrap";import axios from "axios"

const styleForm = {
  width: "100%",
  height: "350px"
};

export default class ColumnSignup extends React.Component{

  render(){
    return (
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
    )
  }
}
