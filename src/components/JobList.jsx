import React from 'react';
import { ListGroup, Form, Button } from 'react-bootstrap';
import AvailableJob from './AvailableJob.jsx';

const JobList = (props) => {
  return (
    <React.Fragment>
      <h3>Available Jobs</h3>
      <Form id="seeker_jobForm">
        <Form.Group controlId="formSearch">
          <Form.Label>Search Bar</Form.Label>
          <Form.Control type="text" placeholder="Search"></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit"></Button>
      </Form>
      <ListGroup>
        {props.location.props.jobs.map((job) => {
          return (
            <AvailableJob jobName={job} />
          );
        })}
      </ListGroup>
    </React.Fragment>
  );
};

export default JobList;