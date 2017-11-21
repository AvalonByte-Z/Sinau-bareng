import React from "react";
import { NavLink } from 'reactstrap';

// STYLING_CSS ---------------------------------------------------

const styleHead = {
  fontFamily: "raleway",
  fontSize: "16px",
  margin: "0px",
  marginRight: "86%",
  marginBottom: "20px",
  fontWeight: "bold",
  borderBottom: "solid #1DE9B6"
};

// Category

const TopUsers = () => (
  <div>
    <div className="d-flex flex-column left">
      <h5 style={styleHead}> Top Users </h5>
      <div className="p-2">
        <NavLink href="#">Rank 1</NavLink>
  		</div>

  		<div className="p-2">
        <NavLink href="#">Rank 2</NavLink>
  		</div>

  		<div className="p-2">
        <NavLink href="#">Rank 3</NavLink>
  		</div>
  	</div>
  </div>
);

// POST

export default TopUsers;
