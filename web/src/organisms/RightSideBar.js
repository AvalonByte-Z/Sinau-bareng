import React from 'react';
import Category from "../molecules/Category"
import TopQuestions from "../molecules/TopQuestions"
import TopUsers from "../molecules/TopUsers"

class RightSideBar extends React.Component{
  render(){
    return(
      <div>
        <TopUsers></TopUsers>
        <TopQuestions></TopQuestions>
        <Category></Category>
      </div>
    )
  }
}
export default RightSideBar
