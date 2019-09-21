import React from 'react';
import CompanyList from './CompanyList.jsx';

class Seeker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Alice',
      referredCompanies: ['IBM', 'Google', 'Apple'],
      pendingCompanies: []
    };
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Welcome, {this.state.name}!</h1>
        </div>
        <CompanyList
          referredCompanies={this.state.referredCompanies}
          pendingCompanies={this.state.pendingCompanies}
        />
      </React.Fragment>
    )
  }
}

export default Seeker;