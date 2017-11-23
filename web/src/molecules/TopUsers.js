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
  borderBottom: "solid #345c7e",
  textAlign: "center",
};

// Category

const TopUsers = () => (
  <div>
    <div className="d-flex flex-column left">

      <div className="p-2">
        Top Users
       </div>

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
