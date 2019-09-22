import React from 'react';
import { NavLink } from "react-router-dom";
import { ListGroup, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import AvailableJob from './AvailableJob.jsx';

class JobList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      renderJobView: false,
      currentJob: {
        // city: '',
        // company_id: null,
        // company_name: '',
        // country: '',
        // date_posted: '',
        // full_description: '',
        // hr_contact: '',
        // job_id: null,
        // posting_url: '',
        // short_description: '',
        // source: '',
        // state_abrev: '',
        // title: ''
      }
    };

    this.renderJob = this.renderJob.bind(this);
    this.getJobs = this.getJobs.bind(this);
  }

  renderJob(job) {
    this.setState({
      renderJobView: !this.state.renderJobView,
      currentJob: job
    })
  }

  getJobs() {
    axios.get('http://3.17.167.107/getJobs')
    .then(({ data }) => {
      this.setState({jobs: data})
    })
    .catch(error => console.log('ERROR'));
  }

  componentDidMount() {
    this.getJobs();
    // const query = queryString.parse(this.props.location.search);
    // const jobs = query.jobs.split(',');
    // this.setState({jobs: jobs});
  }

  render() {
    return (
      this.state.renderJobView ? (
        <div className='jobList_jobViewContainer'>
          <h2>{this.state.currentJob.title}</h2>
          <p>{this.state.currentJob.company_name}</p>
          <p>{this.state.currentJob.full_description}</p>
          <a href={this.state.currentJob.posting_url} target='blank'></a>
          <p>{this.state.currentJob.city}, {this.state.currentJob.state_abrev}</p>
          <p>{this.state.currentJob.country}</p>
          <p>{this.state.currentJob.hr_contact}</p>
          <p>{this.state.currentJob.date_posted}</p>
          <Button onClick={() => this.renderJob()}>
            Back to Job List
          </Button>
        </div>
      ) : (
        <div className='jobList_availableJobsContainer'>
          <h1>Available Jobs</h1>
          <Form id="seeker_jobForm">
            <Form.Group controlId="formSearch" className="seeker_jobSearch">
              <Form.Control type="text" placeholder="Search" className='jobList_searchBar'></Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" className='jobList_searchButton'>Search</Button>
          </Form>
          <ListGroup>
            {this.state.jobs.map((job) => {
              return (
                <AvailableJob
                  key={job.job_id}
                  job={job}
                  renderJob={this.renderJob}
                />
              );
            })}
          </ListGroup>
          <NavLink to='/seeker'>
            <Button>Back</Button> 
          </NavLink>
        </div>
      )
    );
  }
};

export default JobList;