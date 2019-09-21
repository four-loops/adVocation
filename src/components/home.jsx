import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="jumbotron">
        <h1 className="display-4" className="text-center">adVocation</h1>
        <hr className="my-4"/>
        <p className="text-center">Help make your worplace more diverse and inclusive by expanding hiring pools!</p>
        <p className="lead">
        </p>
        </div>
        <Container>
          <Row>
            <Col>
            <p className="text-center">I want to promote diversity!</p>
            </Col>
            <Col><p className="text-center">I need a job!</p></Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Home;