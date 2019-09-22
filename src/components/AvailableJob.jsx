import React from 'react';
import { ListGroup } from 'react-bootstrap';

const AvailableJob = (props) => {
  return (
    <ListGroup.Item onClick={() => props.renderJob(props.job)}>
      <h5>{props.job.title}</h5>
      <br />
      {props.job.company_name}
    </ListGroup.Item>
  );
};

export default AvailableJob;