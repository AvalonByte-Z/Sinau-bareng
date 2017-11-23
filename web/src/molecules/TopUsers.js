import React from "react";

import ListOfProfile from "../organisms/ListOfProfile";


const TopUsers = () => (
  <div>
    <div className="d-flex flex-column left">

      <div className="p-2">
        Top Users
       </div>

       <div className="p-2">
         <ListOfProfile />
       </div>

  	</div>
  </div>
);

// POST

export default TopUsers;
