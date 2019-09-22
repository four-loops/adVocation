import React from 'react';
import ReactDOM from 'react-dom';
import { ListGroup, Button } from 'react-bootstrap';
import Octicon, {iconsByName} from '@primer/octicons-react'
import { NavLink } from "react-router-dom";

class GiverLanding extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      giverCompany: 'Galvanize',
      jobs: [
        {job_id: 13213, company_id: 'Galvanize', title: 'Software Engineer', city: 'Austin', 'state': 'TX', snippet: 'Lorem ipsum dolor sit amet', url: 'http://www.google.com'},
        {job_id: 13203, company_id: 'Galvanize', title: 'Software Engineer', city: 'Austin', 'state': 'TX', snippet: 'Lorem ipsum dolor sit amet', url: 'http://www.google.com'},
        {job_id: 13123, company_id: 'Galvanize', title: 'Software Engineer', city: 'Austin', 'state': 'TX', snippet: 'Lorem ipsum dolor sit amet', url: 'http://www.google.com'},
        {job_id: 23434, company_id: 'Galvanize', title: 'Software Engineer', city: 'Austin', 'state': 'TX', snippet: 'Lorem ipsum dolor sit amet', url: 'http://www.google.com'},
        {job_id: 14343, company_id: 'Galvanize', title: 'Software Engineer', city: 'Austin', 'state': 'TX', snippet: 'Lorem ipsum dolor sit amet', url: 'http://www.google.com'},
        {job_id: 13423, company_id: 'Galvanize', title: 'Software Engineer', city: 'Austin', 'state': 'TX', snippet: 'Lorem ipsum dolor sit amet', url: 'http://www.google.com'},
        {job_id: 14723, company_id: 'Galvanize', title: 'Software Engineer', city: 'Austin', 'state': 'TX', snippet: 'Lorem ipsum dolor sit amet', url: 'http://www.google.com'},
        {job_id: 13783, company_id: 'Galvanize', title: 'Software Engineer', city: 'Austin', 'state': 'TX', snippet: 'Lorem ipsum dolor sit amet', url: 'http://www.google.com'},

      ],
      renderJobView: false,
      currentJob: {job_id: 1, company_id: 'Placeholder', title: 'Place Holder', city: 'Placeholder', 'state': 'TX', snippet: 'Lorem ipsum dolor sit amet', url: 'http://www.google.com'}
    }

  }

  renderJob(job) {
    if(!job){
      job = {
        job_id: 1, 
        company_id: 'Placeholder', 
        title: 'Place Holder', 
        city: 'Placeholder', 
        state: 'TX', 
        snippet: 'Lorem ipsum dolor sit amet', 
        url: 'http://www.google.com'
      }
    }
    this.setState({
      renderJobView: !this.state.renderJobView,
      currentJob: job
    })
  }

  render() {
    return(
      <div id='giverLanding_Body'>
        <h2>Hello, Name!</h2>
        <h4>Here are jobs listed at {this.state.giverCompany} that you can refer for:</h4>
        <div className='giverLanding_ListContainer'>
          {
            this.state.renderJobView 
            ?
            <div id='giverLanding_JobView'>
              <h2>{this.state.currentJob.title}</h2>
              <p>{this.state.currentJob.snippet}</p>
              <div className='giverLanding_JobButtonWrapper'>
                <a href={this.state.currentJob.url} target='blank'>
                  <Button className='giverLanding_JobButton' variant="info">
                    <span>View Full Job </span>
                    <Octicon icon={iconsByName['link-external']}/>
                  </Button>
                </a>
                <NavLink to='/ViewCandidates'>
                  <Button className='giverLanding_JobButton'>Refer for this position</Button>
                </NavLink>
              </div>
            </div> 
            :
            <ListGroup>
              {
                this.state.jobs.map(job => {
                  return (
                    <ListGroup.Item key={job.job_id} onClick={() => this.renderJob(job)}>
                      <h5>{job.title}</h5>
                      <p>{job.city + ',' + job.state}</p>
                    </ListGroup.Item>
                  )
                })
              }
            </ListGroup>
          }
        </div>
        {
          this.state.renderJobView 
          ? 
          <Button className='giverLanding_JobButton' onClick={() => this.renderJob()} >Back to Job List</Button> 
          :
          <div className='giverLanding_ButtonHolder'>
            <Button className='giverLanding_Button'>Preferences</Button>
            <Button className='giverLanding_Button'>Add Job</Button>
          </div>
        }
      </div>
    )
  }
}

export default GiverLanding;

