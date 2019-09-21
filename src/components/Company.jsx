import React from 'react';

const Company = (props) => {
  return (
    <li className="list-group-item">{props.companyName}</li>
  );
};

export default Company;