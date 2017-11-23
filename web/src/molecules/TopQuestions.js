import React from "react";

import { NavLink } from "reactstrap";

import ListOfTopQuestions from "../organisms/ListOfTopQuestions";


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

const TopQuestions = () => (
  <div>
    <div className="d-flex flex-column left">

      <div className="p-2">
        Top Questions
      </div>

      <div className="p-2">
        <ListOfTopQuestions />
  		</div>

  	</div>
  </div>
);

// POST

export default TopQuestions;
