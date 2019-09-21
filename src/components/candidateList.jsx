import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-bootstrap';

class ViewCandidates extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      candidates: [],
      shortList: []
    }

  }


  render() {
    return(
      <div className='candidateList_body'>
        <h1>Candidates</h1>
        <Container>
          <Row>
            <Col className='identifier'>1 of 2</Col>
            <Col className='identifier'>2 of 2</Col>
          </Row>
          <Row>
            <Col className='identifier'>1 of 3</Col>
            <Col className='identifier'>2 of 3</Col>
            <Col className='identifier'>3 of 3</Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default ViewCandidates;

