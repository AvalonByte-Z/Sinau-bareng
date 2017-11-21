import React from "react";

import { NavLink } from "reactstrap";

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

const styleLi = {
  padding: "5px",
  marginBottom: "15px",
  fontSize: "16px"
};

const styleCol = {
  listStyleType: "none",
  fontFamily: "lato",
  padding: "0"
};

const IconCategory = {
  backgroundColor: "#C8E6C9",
  padding: "5px",
  color: "#ffffff",
  fontFamily: "lato",
  borderRadius: "10px",
  marginRight: "25px"
};

const StyleLogo = {
  width: "10%",
  height: "10%",
  padding: "5px",
  color: "#ffffff",
  borderRadius: "10px",
  marginRight: "25px"

};

// Category

const TopQuestions = () => (
  <div>
    <div className="d-flex flex-column left">
      <h5 style={styleHead}> Top Questions </h5>
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

export default TopQuestions;
