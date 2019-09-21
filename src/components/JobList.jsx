import React from 'react';
import { ListGroup } from 'react-bootstrap';
import AvailableJob from './AvailableJob.jsx';

const JobList = (props) => {
  return (
    <ListGroup>
      {props.jobs.map((job) => {
          return (
            <AvailableJob jobName={job} />
          );
        })}
    </ListGroup>
  );
};

export default JobList;