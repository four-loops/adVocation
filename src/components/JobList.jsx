import React from 'react';
import { ListGroup } from 'react-bootstrap';
import AvailableJob from './AvailableJob.jsx';

const JobList = (props) => {
  return (
    <React.Fragment>
      <h3>Available Jobs</h3>
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