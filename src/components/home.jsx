import React, {Component} from 'react';
import { Container, Row, Col, Card, Button, Jumbotron } from 'react-bootstrap';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }
  render() {
    return (
      <div>
        <Jumbotron>
        <h1 className="display-4" className="text-center">adVocation</h1>
        <hr className="my-4"/>
        <p className="text-center">Help make your worplace more diverse and inclusive by expanding hiring pools!</p>
        <p className="lead">
        </p>
        </Jumbotron>
        <Container>
          <Row>
            <Col>
              <Button variant="outline-light">
              <Card bg="success" text="white" >
              <Card.Header><p text="white" className="text-center">I want to promote diversity at my company!</p></Card.Header>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>sign up</Card.Text>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
              </Button>
            </Col>
            <Col>
              <Button variant="outline-light">
              <Card bg="info" text="white" >
              <Card.Header><p text="white" className="text-center">I'd like a job at a company that values inclusion!</p></Card.Header>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>sign up</Card.Text>
                  <Card.Text>
                </Card.Text>
                </Card.Body>
              </Card>
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>already a user? job referrers log in here</Col>
            <Col>already a user? job seekers log in here</Col>
          </Row>

        </Container>
      </div>
    )
  }
}


export default Home;

