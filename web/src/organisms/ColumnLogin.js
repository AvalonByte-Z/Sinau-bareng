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
} from "reactstrap";
import axios from "axios"

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

const initialState = {
  loginEmail: "",
  loginPassword: ""
}


class ColumnLogin extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }


  // HANDLE CHANGE IN LOGIN FORM

  handleChange = event => {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      [name]: value
    })
  }

  // HANDLE SUBMIT LOGIN

  handleSubmit = event => {
    event.preventDefault()

    const payload = {
      email: this.state.loginEmail,
      password: this.state.loginPassword
    }

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, payload)
      .then(response => {
        if (response.data.token) {
          helpers.setToken(response.data.token)
          this.setState(initialState)
          // NOTIFY VISITOR
          // console.log(response.data)
          alert(`Login success!`)
          // REDIRECT TO HOME
          this.props.history.push("/")
        } else {
          throw new Error()
        }
      })
      .catch(error => {
        alert(`${error}`)
        console.log(error)
      })
  }


  render() {
    return (
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
                value={this.state.loginEmail}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="loginPassword">Password</Label>
              <Input
                type="password"
                name="loginPassword"
                id="loginPassword"
                placeholder="Enter your password here"
                value={this.state.loginPassword}
                onChange={this.handleChange}
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
    )
  }
}

export default ColumnLogin
