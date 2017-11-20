import React from 'react';
import ReactDOM from 'react-dom'

class upButton extends React.Component {
  constructor(){
    super();
    this.state = {increasing: false}
  }
  update(){
    ReactDOM.render(
      <upButton val={this.props.val + 1} />,
      document.getElementById('root'))
  }
  componentWillReceiveProps(nextProps){
    this.setState({increasing: nextProps.val > this.props.val})
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.val % 5 === 0;
  }
  render(){
    console.log(this.state.increasing)
    return (
      <button onClick={this.update.bind(this)}>
        {this.props.val}
      </button>
    )
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(`prevProps: ${prevProps.val}`)
  }
}

upButton.defaultProps = {val: 0}

ReactDOM.render(
  <upButton />,
  document.getElementById('root')
);
