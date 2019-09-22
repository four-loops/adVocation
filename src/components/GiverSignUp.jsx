import React from 'react';
import { Redirect, NavLink } from "react-router-dom";
import { Form, Button, Checkbox } from 'react-bootstrap';
import axios from 'axios';

class GiverSignUp extends React.Component {
// const GiverSignUp = (props) => {
  constructor(props) {
    super(props);
    this.state = {
      showForm: true
    };
    this.submitGiverFormData = this.submitGiverFormData.bind(this);
  }

  submitGiverFormData(event){
    event.preventDefault();
    event.stopPropagation();
    let form = event.currentTarget;
    // this.verifyPledgeAgreement();
    let formData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      company_name: form.elements.company_name.value,
      password: form.elements.password.value,
      linkedin_url: form.elements.linkedin_url.value,
      hr_contact: form.elements.hr_contact.value,
      seeker_see_name: false
    }

    axios.post('http://3.17.167.107/createGiver', 
      formData
    )
    .then(() => console.log('Account successfully created'))
    .catch(error => console.log('Failed to create account'))

    this.setState({showForm: !this.state.showForm});

  }

  render() {

    if ( this.state.showForm) {
    return (
      // <Form onSubmit={(event)=>props.location.props.submitGiverFormData(event)}>
      <Form onSubmit={this.submitGiverFormData}>
      <h3>Register</h3>
      {/* <Form.Group controlId="diversityPledge" onChange={()=>props.location.props.handleDiversityCheckboxChange()}>
        <Form.Check type="checkbox" label="I promise to consciously promote acceptance and demonstrate respect." />
      </Form.Group> */}

      <Form.Group controlId="name">
        <Form.Label>Your Full Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="company_name">
        <Form.Label>Company Name</Form.Label>
        <Form.Control type="company_name" placeholder="Enter company" />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" />
      </Form.Group>

      <Form.Group controlId="linkedin_url">
        <Form.Label>Link to LinkedIn Profile</Form.Label>
        <Form.Control type="linkedin_url" placeholder="https://www.linkedin.com/in/yourprofilehere" />
      </Form.Group>

      <Form.Group controlId="hr_contact">
        <Form.Label>Where do we e-mail your referrals?</Form.Label>
        <Form.Control type="email" placeholder="E-mail address of your company's HR team" />
      </Form.Group>

      {/* <Form.Group controlId="seeker_see_name" onChange={()=>props.location.props.handleEmailShareCheckboxChange()}>
        <Form.Label>Are you willing to share your name with those you refer?</Form.Label>
        <Form.Check type="checkbox" label="Check here if the people who you refer can mention you by name when they follow-up on job leads" />
      </Form.Group> */}

      <p>By submitting this form, I promise to consciously promote acceptance and demonstrate respect. I am also willing to share my name with those I refer.</p>

      {/* <NavLink to='/GiverLanding'> */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      {/* </NavLink> */}
      </Form>
      
    );
    } else {
      return <Redirect to='/GiverLanding' />
    }
  };
}

export default GiverSignUp;