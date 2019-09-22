import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import axios from 'axios';
import CompanyList from './CompanyList.jsx';
import Search from './Search.jsx'
import ViewSeekerProfile from './ViewSeekerProfile.jsx'

class Seeker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Alice',
      isExpandedView: false,
      renderJobView: false,
      referredCompanies: [],
      // referredCompanies: ['IBM', 'Google', 'Apple', 'Indeed', 'Amazon', 'Unemployed'],
      pendingCompanies: [],
      currentJob: null
    };

    this.viewMore = this.viewMore.bind(this);
    this.renderJob = this.renderJob.bind(this);
  }

  getJobs() {
    axios.get('http://3.17.167.107/getJobs') // UPDATE LINK WITH NEW ENDPOINT
    .then(({ data }) => {
      this.setState({referredCompanies: data})
    })
    .catch(error => console.log('ERROR'));
  }

  renderJob(job) {
    this.setState({
      renderJobView: !this.state.renderJobView,
      currentJob: job
    })
  }

  viewMore() {
    this.setState({isExpandedView: !this.state.isExpandedView})
  }

  componentDidMount() {
    this.getJobs();
  }

  render() {
    return (
      <div className='seeker_Container'>
        <div>
          {
            this.state.renderJobView ? null :
            <h1>
              Welcome, {this.state.name}!
            </h1>
          }
        </div>
        <CompanyList
          isExpandedView={this.state.isExpandedView}
          renderJobView={this.state.renderJobView}
          referredCompanies={this.state.referredCompanies}
          pendingCompanies={this.state.pendingCompanies}
          currentJob={this.state.currentJob}
          renderJob={this.renderJob}
          viewMore={this.viewMore}
        />
        <div className='seeker_buttonWrapper'>
          <Search />
          <ViewSeekerProfile />
        </div>
      </div>
    )
  }
}

export default Seeker;