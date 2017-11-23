import React from "react";
import { NavLink } from 'reactstrap';


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
