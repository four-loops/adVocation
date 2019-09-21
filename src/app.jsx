import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="jumbotron">
        <h1 className="display-4">adVocation</h1>
        {/* <p className="lead">Created with love</p> */}
        <hr className="my-4"/>
        <p>Help make your worplace more diverse and inclusive by expanding hiring pools!</p>
        <p className="lead">
        {/* <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a> */}
        </p>
        </div>
        <Container>
          <Row>
            <Col>I want to refer!</Col>
            <Col>I need a job!</Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App;