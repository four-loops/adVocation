import React from 'react';
import { Button } from 'react-bootstrap';
import { Jumbotron, ListGroup } from 'react-bootstrap';
import Company from './Company.jsx'

const CompanyList = (props) => {
  console.log(props.referredCompanies)
  return (
    <Jumbotron>
      <h3>Here's where you've been referred!</h3>
      {props.currentJob ? (
        <Company
          renderJobView={props.renderJobView}
          renderJob={props.renderJob}
          currentJob={props.currentJob}
        />
      ) : (
        props.referredCompanies.length < 6 ? (
          <ListGroup>
            {props.referredCompanies.map((company) => {
              return (
                <Company
                  company={company}
                  renderJobView={props.renderJobView}
                  renderJob={props.renderJob}
                  currentJob={props.currentJob}
                />
              );
            })}
          </ListGroup>
        ) : props.isExpandedView ? (
          <ListGroup>
              {props.referredCompanies.map((company) => {
                return (
                  <Company
                    company={company}
                    renderJobView={props.renderJobView}
                    renderJob={props.renderJob}
                    currentJob={props.currentJob}
                  />
                );
              })}
            </ListGroup>
        ) : (
          <React.Fragment>
            <ListGroup>
              {props.referredCompanies.slice(0, 5).map((company) => {
                return (
                  <Company
                    company={company}
                    renderJobView={props.renderJobView}
                    renderJob={props.renderJob}
                    currentJob={props.currentJob}
                  />
                );
              })}
            </ListGroup>
            <Button onClick={props.viewMore}>View more</Button>
          </React.Fragment>
        )
      )}
    </Jumbotron>
  );
};

export default CompanyList;