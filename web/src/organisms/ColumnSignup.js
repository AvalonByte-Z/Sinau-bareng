import React from "react"
import {
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  CardBody
} from "reactstrap";
import axios from "axios"

const initialState = {
  signupName: "",
  signupEmail: "",
  signupPassword: ""
}

export default class ColumnSignup extends React.Component{
constructor(props) {
    super(props)
    this.state = initialState
  }

  // HANDLE CHANGE IN SIGN UP FORM

  handleChange = event => {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      [name]: value
    })
  }

  // HANDLE SUBMIT SIGN UP

  handleSubmit = event => {
    event.preventDefault()

    const payload = {
      name: this.state.signupName,
      email: this.state.signupEmail,
      password: this.state.signupPassword
    }

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/signup`, payload)
      .then(response => {
        this.setState(initialState)
        alert(`Sign up success!`)
      })
      .catch(error => {
        alert(`${error}`)
        console.log(error)
      })
  }

render(){
  return (
    <Col xs={12}>
      <CardBody>
        <h3>Sign Up</h3>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="signupName">Full Name</Label>
            <Input
              type="text"
              name="signupName"
              id="signupName"
              placeholder="Enter your Full Name here"
              value={this.state.signupName}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="signupEmail">Email</Label>
            <Input
              type="email"
              name="signupEmail"
              id="signupEmail"
              placeholder="Enter your email heree"
              value={this.state.signupEmail}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="signupPassword">Password</Label>
            <Input
              type="password"
              name="signupPassword"
              id="signupPassword"
              placeholder="Enter your password here"
              value={this.state.signupPassword}
              onChange={this.handleChange}
            />
          </FormGroup>
          <input type="submit" value="Sign Up"/>
       </Form>
      </CardBody>
    </Col>
    )
  }
}
