import React, {Component} from 'react';
import { BrowserRouter as Redirect, NavLink } from "react-router-dom";
import { Container, Row, Col, Card, Button, Jumbotron, Alert } from 'react-bootstrap';
import GiverSignUp from './GiverSignUp.jsx';


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pledge: true
    }; 
    this.submitGiverFormData = this.submitGiverFormData.bind(this);
  }

  verifyPledgeAgreement(){
    if (this.state.pledge === false) {
      

    }
  }

  submitGiverFormData(event){
    event.preventDefault();
    let form = event.target
    if (form.elements.diversityPledge.value === 'off') {
      this.setState({
        pledge: false
      })
    }
    this.verifyPledgeAgreement();
    let formData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
      linkedin_url: form.elements.linkedin_url.value,
      hr_contact: form.elements.hr_contact.value,
      seeker_see_name: (form.elements.seeker_see_name.value === 'on' ? true : false)
    }
    console.log(formData)
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
              <NavLink to={{
                pathname: '/GiverSignUp',
                props: {
                  submitGiverFormData: this.submitGiverFormData,
                }
              }}>
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
              </NavLink>
            </Col>
            <Col>
              <NavLink to='/SeekerSignUp'>
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
              </NavLink>
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

