import React from "react";

import { NavLink } from "react-router-dom";

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

const TopUsers = () => (
  <div>
    <h5 style={styleHead}> Top Questions </h5>
    <div style={styleCol}>

    </div>
  </div>
);

// POST

export default TopUsers;
