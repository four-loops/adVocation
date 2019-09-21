import React from 'react';
import ReactDOM from 'react-dom';

class ViewCandidates extends React.Component {

  constructor(props) {
    super(props)
    this.property = 'init'
  
  }


  render() {
    return(
      <div>this is React!</div>
    )
  }
}

export default ViewCandidates;

//ReactDOM.render(<ViewCandidates />, document.getElementById('candidate-list'))

