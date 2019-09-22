import React from 'react';
import ReactDOM from 'react-dom';
import { ListGroup, Button } from 'react-bootstrap';

class GiverLanding extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      jobs: [
        {job_id: 13213, company_id: 'Galvanize', title: 'Software Engineer', city: 'Austin', 'state': 'TX', snippet: 'Lorem ipsum dolor sit amet', url: 'http://www.google.com'},
        {job_id: 13203, company_id: 'Galvanize', title: 'Software Engineer', city: 'Austin', 'state': 'TX', snippet: 'Lorem ipsum dolor sit amet', url: 'http://www.google.com'},
        {job_id: 13123, company_id: 'Galvanize', title: 'Software Engineer', city: 'Austin', 'state': 'TX', snippet: 'Lorem ipsum dolor sit amet', url: 'http://www.google.com'},
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
        <h4>Here are jobs listed at COMPANY that you can refer for:</h4>
        <div className='giverLanding_ListContainer'>
          {
            this.state.renderJobView 
            ?
            <div id='giverLanding_JobView'>
              <h2>{this.state.currentJob.title}</h2>
              <p>{this.state.currentJob.snippet}</p>
              <div className='giverLanding_JobButtonWrapper'>
                <Button className='giverLanding_JobButton'>View Full Job</Button>
                <Button className='giverLanding_JobButton'
                        onClick={() => this.renderJob()}
                        >Back to Job List</Button>
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
        <div className='giverLanding_ButtonHolder'>
          <Button className='giverLanding_Button'>Preferences</Button>
          <Button className='giverLanding_Button'>Add Job</Button>
        </div>
      </div>
    )
  }
}

export default GiverLanding;

