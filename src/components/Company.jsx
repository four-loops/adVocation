import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const Company = (props) => {
  return (
    props.renderJobView ? (
      <div>
        <h2>{props.currentJob.title}</h2>
        <p>{props.currentJob.company_name}</p>
        <p>{props.currentJob.full_description}</p>
        <a href={props.currentJob.posting_url} target='blank'></a>
        <p>{props.currentJob.city}, {props.currentJob.state_abrev}</p>
        <p>{props.currentJob.country}</p>
        <p>{props.currentJob.hr_contact}</p>
        <p>{props.currentJob.date_posted}</p>
        <Button className='company_askReferral'>Ask for referral</Button>
        <Button onClick={() => props.renderJob()}>
          Back
        </Button>
      </div>
    ) : (
      <ListGroup.Item onClick={() => props.renderJob(props.company)}>
        {props.company.company_name}
      </ListGroup.Item>
    )
  );
};

export default Company;