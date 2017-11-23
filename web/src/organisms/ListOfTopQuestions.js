import React from "react"
import { Col } from "reactstrap"
import axios from "axios"

import CardTopQuestion from "../molecules/CardTopQuestion"

// -----------------------------------------------------------------------------

export default class ListOfQuestions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: []
    }
  }

  componentWillMount() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/questions`)
      .then(response => {
        this.setState({ questions: response.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <Col xs={12}>
        {this.state.questions.map(question => {
          return <CardTopQuestion key={question.id} question={question} />
        })}
      </Col>
    )
  }
}


// import LinkToQuestion from "../atoms/LinkToQuestion";
//
// import DATA_QUESTIONS from "../data/questions";
//
// // -----------------------------------------------------------------------------
//
// const CardQuestion = props => (
//   <Card
//     style={{
//       margin: "10px"
//     }}
//   >
//     <CardBody key={props.question._id}>
//       <CardTitle>
//         <h3>
//           <LinkToQuestion question={props.question} />
//         </h3>
//       </CardTitle>
//     </CardBody>
//   </Card>
// );
//
// // -----------------------------------------------------------------------------
//
// const Home = () => (
//   <Col xs={10}>
//     {DATA_QUESTIONS.map(question => {
//       return (
//         question.answers.length > 0 && <CardQuestion question={question} />
//       );
//     })}
//   </Col>
// );
//
// export default Home;
