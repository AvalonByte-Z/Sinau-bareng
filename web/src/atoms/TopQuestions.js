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

const Category = () => (
  <div>
    <h5 style={styleHead}> Top Questions </h5>
    <div style={styleCol}>

      {/* // Category B.indo */}
      <li style={styleLi}>
        <NavLink exact to="/masuk">
          <img src={BIndo} alt="logo" style={StyleLogo} />
          Bahasa Indonesia
        </NavLink>
      </li>

      {/* // Category B.inggris */}
      <li style={styleLi}>
        <NavLink exact to="/masuk">
          <img src={BInggris} alt="logo" style={StyleLogo} />
          Bahasa Inggris
        </NavLink>
      </li>

      {/* // Category Biologi */}
      <li style={styleLi}>
        <NavLink exact to="/masuk">
          <img src={Biologi} alt="logo" style={StyleLogo} />
          biologi
        </NavLink>
      </li>

      {/* // Category Ekonomi */}
      <li style={styleLi}>
        <NavLink exact to="/masuk">
          <img src={Ekonomi} alt="logo" style={StyleLogo} />
          Ekonomi
        </NavLink>
      </li>

      {/* // Category fisika */}
      <li style={styleLi}>
        <NavLink exact to="/masuk">
          <img src={Fisika} alt="logo" style={StyleLogo} />
          Fisika
        </NavLink>
      </li>

      {/* // Category Geografi */}
      <li style={styleLi}>
        <NavLink exact to="/masuk">
          <img src={Geografi} alt="logo" style={StyleLogo} />
          Geografi
        </NavLink>
      </li>

      {/* // Category Kimia */}
      <li style={styleLi}>
        <NavLink exact to="/masuk">
          <img src={Kimia} alt="logo" style={StyleLogo} />
          Kimia
        </NavLink>
      </li>

      {/* // Category Mathematics */}
      <li style={styleLi}>
        <NavLink exact to="/masuk">
          <img src={Math} alt="logo" style={StyleLogo} />
          Math
        </NavLink>
      </li>

      {/* // Category Sejarah */}
      <li style={styleLi}>
        <NavLink exact to="/masuk">
          <img src={Sejarah} alt="logo" style={StyleLogo} />
          Sejarah
        </NavLink>
      </li>
    </div>
  </div>
);

// POST

export default Category;
