import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from "reactstrap";
import { Button, Badge } from 'reactstrap';


import LinkToQuestion from "../atoms/LinkToQuestion";
import LinkToProfile from "../atoms/LinkToProfile";

class CardAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	collapse: false,
    	UpvoteStatus: 'Vote',
    	UpvoteCount: 10,
    	disabled: false,
    	disabledDownvote: false,
    	DownvoteStatus: 'Downvote',
    }
    this.toggle = this.toggle.bind(this);
  	this.toggleUpvote = this.toggleUpvote.bind(this)
  	this.toggleDownvote = this.toggleDownvote.bind(this)
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleUpvote() {
  	this.setState({
  		UpvoteStatus: 'Voted',
  		UpvoteCount: this.state.UpvoteCount + 1,
  		disabled: true,
  		disabledDownvote: false
  	 })
  }

  toggleDownvote() {
  	this.setState({
  		UpvoteStatus: 'Vote',
  		UpvoteCount: this.state.UpvoteCount - 1,
  		disabled: false,
  		DownvoteStatus: 'Downvoted',
  		disabledDownvote: true
  	 })
  }

	render() {
		return(
      <Card
        style={{
          margin: "10px"
        }}
      >
        <CardBody key={this.props.question._id}>
          <CardTitle>
            <h3>
              <LinkToQuestion question={this.props.question} />
            </h3>
          </CardTitle>
          <CardSubtitle>
            <h6>
              Answered by{" "}
              <LinkToProfile user={this.props.question.answers[0].createdBy} />
            </h6>
          </CardSubtitle>
          <CardText>{this.props.question.answers[0].text}</CardText>
          <div className="btn-group">
        		<Button outline color="primary" className="btn-upvote" onClick={this.toggleUpvote} disabled={this.state.disabled}>
        		<Badge pill>{this.state.UpvoteCount}</Badge>{this.state.UpvoteStatus}</Button>
        		<Button outline color="primary" className="btn-upvote" onClick={this.toggleDownvote} disabled={this.state.disabledDownvote}>{this.state.DownvoteStatus}</Button>
        	</div>
        </CardBody>
      </Card>
    )
  }
}

export default CardAnswer
