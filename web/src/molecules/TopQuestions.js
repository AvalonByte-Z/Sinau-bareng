import React from "react";


import ListOfTopQuestions from "../organisms/ListOfTopQuestions";

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

export default TopQuestions;
