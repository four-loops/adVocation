import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Redirect, NavLink } from "react-router-dom";
import axios from 'axios';

class SeekerSignUp extends React.Component {
// const SeekerSignUp = (props) => {
  constructor(props) {
    super(props);
    this.state = {
      showForm: true
    };
    this.submitSeekerFormData = this.submitSeekerFormData.bind(this);
  }

  submitSeekerFormData(event){
    event.preventDefault();
    event.stopPropagation();
    let form = event.currentTarget;
    const sellingPoints = [];
    sellingPoints.push(form.elements.selling_point_1.value, form.elements.selling_point_2.value, form.elements.selling_point_3.value)
    const location = [];
    location.push(form.elements.job_search_location.value)
    let formData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
      linkedin_url: form.elements.linkedin_url.value,
      job_position: form.elements.job_position.value,
      level_of_experience: Number(form.elements.level_of_experience.value),
      job_search_location: location,
      selling_points: sellingPoints
    }
    
    axios.post('http://3.17.167.107/createSeeker', 
      formData
    )
    .then(() => console.log('Account successfully created'))
    .catch(error => console.log('Failed to create account'))
    
    this.setState({showForm: !this.state.showForm});
  }

  render() {
    if ( this.state.showForm) {
      return (
        <Form onSubmit={this.submitSeekerFormData}>
      <h3>Register</h3>
      {/* <Form.Group controlId="diversityPledge">
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
          Your e-mail address may be seen by your referrers and by potential employers.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group controlId="linkedin_url">
        <Form.Label>Link to LinkedIn Profile</Form.Label>
        <Form.Control type="linkedin_url" placeholder="https://www.linkedin.com/in/yourprofilehere" />
      </Form.Group>

      <Form.Group controlId="job_position">
        <Form.Label>Which title best suits the type of job you are seeking?</Form.Label>
        <Form.Control as="select">
          <option>Software Engineer</option>
          <option>Graphic Designer</option>
          <option>Network Security Analyst</option>
          <option>Social Media Specialist</option>
          <option>Finance Manager</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="level_of_experience">
        <Form.Label>How many years of experience do you have in this field?</Form.Label>
        <Form.Control type="level_of_experience" placeholder="Enter years of experience" />
      </Form.Group>

      <Form.Group controlId="job_search_location">
        <Form.Label>In what city are you looking for employment?</Form.Label>
        <Form.Control type="level_of_experience" placeholder="Enter City" />
      </Form.Group>

      <p className="text-center"> Please list three accomplishments that will help convince potential referrers to endorse you.</p>
      <p className="text-center">You only have 300 characters for each field.</p>

      <Form.Group controlId="selling_point_1">
        <Form.Label></Form.Label>
        <Form.Control maxLength="300" type="selling_point_1" placeholder="First Accomplishment" />
      </Form.Group>

      <Form.Group controlId="selling_point_2">
        <Form.Label></Form.Label>
        <Form.Control maxLength="300" type="selling_point_2" placeholder="Second Accomplishment" />
      </Form.Group>

      <Form.Group controlId="selling_point_3">
        <Form.Label></Form.Label>
        <Form.Control maxLength="300" type="selling_point_3" placeholder="Third Accomplishment" />
      </Form.Group>

      <p>By submitting this form, I promise to consciously promote acceptance and demonstrate respect.</p>

      {/* <NavLink to='/Seeker'> */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      {/* </NavLink> */}


      </Form>
      
    );
    } else {
      return <Redirect to='/seeker' />
    }
  }
}

export default SeekerSignUp;