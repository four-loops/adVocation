import React from 'react';
import { Form, Button } from 'react-bootstrap';


const GiverSignUp = (props) => {
    return (
      <Form onSubmit={(event)=>props.location.props.submitGiverFormData(event)}>
      
      <Form.Group controlId="diversityPledge">
        <Form.Check type="checkbox" label="I promise to consciously promote acceptance and demonstrate respect." />
      </Form.Group>

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

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group controlId="linkedin_url">
        <Form.Label>Link to LinkedIn Profile</Form.Label>
        <Form.Control type="linkedin_url" placeholder="https://www.linkedin.com/in/yourprofilehere" />
      </Form.Group>

      <Form.Group controlId="hr_contact">
        <Form.Label>Where do we e-mail your referrals?</Form.Label>
        <Form.Control type="hr_contact" placeholder="E-mail address of your company's HR team" />
      </Form.Group>

      <Form.Group controlId="seeker_see_name">
        <Form.Label>Are you willing to share your name with those you refer?</Form.Label>
        <Form.Check type="checkbox" label="Check here if the people who you refer can mention you by name when they follow-up on job leads" />
      </Form.Group>

      <Button variant="primary" type="submit" >
        Submit
      </Button>
      </Form>
      
    );
  };

  export default GiverSignUp;