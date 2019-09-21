import React from 'react';
import { Jumbotron, ListGroup } from 'react-bootstrap';
import Company from './Company.jsx'

const CompanyList = (props) => {
  return (
    <Jumbotron>
      <h3>Here's where you've been referred!</h3>
      <ListGroup>
        {props.referredCompanies.map((company) => {
          return (
            <Company companyName={company} />
          );
        })}
      </ListGroup>
    </Jumbotron>
  );
};

export default CompanyList;