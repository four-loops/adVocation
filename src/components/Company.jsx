import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Company = (props) => {
  return (
    <ListGroup.Item>
      {props.companyName}
    </ListGroup.Item>
  );
};

export default Company;