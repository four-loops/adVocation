import React from 'react';
import { NavLink } from "react-router-dom";
import { Button } from 'react-bootstrap';

const Search = (props) => {
  return (
    <NavLink to={{
      pathname: '/jobs',
      props: {
        jobs: props.jobs
      }
    }}>
      <Button variant="primary" size="lg" block>
        Search Jobs
      </Button>
    </NavLink>
  );
};

export default Search;