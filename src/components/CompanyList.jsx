import React from 'react';
import Company from './Company.jsx'

const CompanyList = (props) => {
  return (
    <div className="jumbotron">
      <h2>Here's where you've been referred!</h2>
      <ul className="list-group">
        {props.referredCompanies.map((company) => {
          return (
            <Company companyName={company} />
          );
        })}
      </ul>
    </div>
  );
};

export default CompanyList;