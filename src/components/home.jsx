import React, {Component} from 'react';
import { BrowserRouter as Redirect, NavLink } from "react-router-dom";
import { Container, Row, Col, Card, Button, Jumbotron, Alert } from 'react-bootstrap';


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      diversityPledge: false,
      seeker_see_name: false
    }; 
    this.submitGiverFormData = this.submitGiverFormData.bind(this);
    this.handleDiversityCheckboxChange = this.handleDiversityCheckboxChange.bind(this);
    this.handleEmailShareCheckboxChange = this.handleEmailShareCheckboxChange.bind(this);
  }

  handleDiversityCheckboxChange() {
    let isChecked = this.state.diversityPledge;
    this.setState({
      diversityPledge: !isChecked
    }, console.log(this.state.diversityPledge))
  }

  handleEmailShareCheckboxChange() {
    let isChecked = this.state.seeker_see_name;
    this.setState({
      seeker_see_name: !isChecked
    }, console.log(this.state.seeker_see_name))
  }

  verifyPledgeAgreement(){
    if (this.state.diversityPledge === false) {
      // return (
      //   <Alert variant="danger" onClose={() => setShow(false)} dismissible>
      //     <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      //     <p>
      //       This app is designed for people who support inclusion in the workplace!
      //     </p>
      //   </Alert>
      // );
    }
  }

  submitGiverFormData(event){
    event.preventDefault();
    let form = event.target
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
                  handleDiversityCheckboxChange: this.handleDiversityCheckboxChange,
                  handleEmailShareCheckboxChange: this.handleEmailShareCheckboxChange
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

