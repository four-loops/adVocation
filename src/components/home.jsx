import React, {Component} from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

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
              <Button variant="outline-light">
              <Card bg="success" text="white" >
                <Card.Body>
                  <Card.Title><p text="white" className="text-center">I want to help promote diversity at my company!</p></Card.Title>
                  <Card.Text>
                </Card.Text>
                </Card.Body>
              </Card>
              </Button>
            </Col>
            <Col>
              <Button variant="outline-light">
              <Card bg="info" text="white" >
                <Card.Body>
                  <Card.Title><p text="white" className="text-center">I'd like a job at a company that values inclusion!</p></Card.Title>
                  <Card.Text>
                </Card.Text>
                </Card.Body>
              </Card>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}


export default Home;

