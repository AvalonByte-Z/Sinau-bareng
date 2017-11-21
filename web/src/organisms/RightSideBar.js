import React from 'react';
import { NavLink } from 'reactstrap'
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
