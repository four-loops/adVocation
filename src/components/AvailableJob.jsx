import React from 'react';
import { ListGroup } from 'react-bootstrap';

const AvailableJob = (props) => {
  return (
    <ListGroup.Item>
      {props.jobName}
    </ListGroup.Item>
  );
};

export default AvailableJob;