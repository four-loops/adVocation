import React from 'react';
import { Form, Button} from 'react-bootstrap';

const SeekerSignUp = (props) => {
    return (
      <Form>
      
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

      <p className="text-center">Craft three selling points that help will convince potential referrers to endorse you.</p>
      <p className="text-center">You only have 300 characters for each field.</p>

      <Form.Group controlId="selling_point_1">
        <Form.Label></Form.Label>
        <Form.Control maxLength="300" type="selling_point_1" placeholder="First Selling Point" />
      </Form.Group>

      <Form.Group controlId="selling_point_2">
        <Form.Label></Form.Label>
        <Form.Control maxLength="300" type="selling_point_2" placeholder="Second Selling Point" />
      </Form.Group>

      <Form.Group controlId="selling_point_3">
        <Form.Label></Form.Label>
        <Form.Control maxLength="300" type="selling_point_3" placeholder="Third Selling Point" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
      
    );
  };

  export default SeekerSignUp;