import React from "react";

import { NavLink } from "react-router-dom";


import BIndo from "../img/IconCategory/color/bahasaIndonesia.png";
import BInggris from "../img/IconCategory/color/bahasaInggris.png";
import Biologi from "../img/IconCategory/color/biologi.png";
import Ekonomi from "../img/IconCategory/color/ekonomi.png";
import Fisika from "../img/IconCategory/color/fisika.png";
import Geografi from "../img/IconCategory/color/geografi.png";
import Kimia from "../img/IconCategory/color/kimia.png";
import Math from "../img/IconCategory/color/math.png";
import Sejarah from "../img/IconCategory/color/sejarah.png";


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
    <div className="p-2">
      Categories
     </div>

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
