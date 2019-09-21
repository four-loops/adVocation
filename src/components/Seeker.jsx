import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import CompanyList from './CompanyList.jsx';
import Search from './Search.jsx'
import SeekerProfile from './SeekerProfile.jsx'

class Seeker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Alice',
      referredCompanies: ['IBM', 'Google', 'Apple'],
      pendingCompanies: [],
      allJobs: ['job1', 'job2', 'job3']
    };
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h1>
            Welcome, {this.state.name}!
          </h1>
        </div>
        <CompanyList
          referredCompanies={this.state.referredCompanies}
          pendingCompanies={this.state.pendingCompanies}
        />
        <Search
          jobs={this.state.allJobs}
        />
        <SeekerProfile />
      </React.Fragment>
    )
  }
}

export default Seeker;