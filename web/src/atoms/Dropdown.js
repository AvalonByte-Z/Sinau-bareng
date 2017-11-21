import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class Dropdown1 extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
        <DropdownToggle caret>Hafidz Permana</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem to={`welcome`}>Logout</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
