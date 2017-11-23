import React from 'react';
import TopQuestions from "../molecules/TopQuestions"
import TopUsers from "../molecules/TopUsers"

class RightSideBar extends React.Component{
  render(){
    return(
      <div>
        <TopUsers></TopUsers>
        <TopQuestions></TopQuestions>
      </div>
    )
  }
}
export default RightSideBar
