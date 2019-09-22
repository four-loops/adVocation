import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import Octicon, {iconsByName} from '@primer/octicons-react'

class GiverShortLists extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      candidates: [
        ['Front End Developer', {seeker_name: 'Async Await', seeker_job_title: 'Coffee Runner'}, {seeker_name: 'Async Await', seeker_job_title: 'Coffee Runner'}, {seeker_name: 'Async Await', seeker_job_title: 'Coffee Runner'}, {seeker_name: 'Async Await', seeker_job_title: 'Coffee Runner'}, {seeker_name: 'Async Await', seeker_job_title: 'Coffee Runner'} , {seeker_name: 'Async Await', seeker_job_title: 'Coffee Runner'}],
        ['Full Stack Developer', {seeker_name: 'Amelia Earhart', seeker_job_title: 'Pilot'}, {seeker_name: 'Async Await', seeker_job_title: 'Coffee Runner'}, {seeker_name: 'Async Await', seeker_job_title: 'Coffee Runner'}, {seeker_name: 'Async Await', seeker_job_title: 'Coffee Runner'}, {seeker_name: 'Async Await', seeker_job_title: 'Coffee Runner'} , {seeker_name: 'Async Await', seeker_job_title: 'Coffee Runner'}], 
        ['Designer', {seeker_name: 'Oscar Grouch', seeker_job_title: 'Waste Management Professional'}, {seeker_name: 'Async Await', seeker_job_title: 'Coffee Runner'}, {seeker_name: 'Async Await', seeker_job_title: 'Coffee Runner'}, {seeker_name: 'Async Await', seeker_job_title: 'Coffee Runner'}, {seeker_name: 'Async Await', seeker_job_title: 'Coffee Runner'} , {seeker_name: 'Async Await', seeker_job_title: 'Coffee Runner'}]
      ]
    }
  }

  render() {
    return (
      <div id='giver_shortlists_body'>
        <h1>Referred Candidates</h1>
        <div id='candidateListContainer'>
          {
            this.state.candidates.map(candidateList => {
              return <ReferView candidateList={candidateList}
                                key={candidateList[0]}/>
            })
          }
        </div>
        <NavLink to='/ViewCandidates'>
            <Button className='giver_shortlists_back'>
              <Octicon icon={iconsByName['arrow-left']}/>
              Candidates
            </Button>
          </NavLink>
        
      </div>
    )
  }
}

const ReferView = (props) => {
  return (
    <div className='referView_Container'>
      <h3>{props.candidateList[0]}</h3>
      <div className={'referView_CardHolder'} >
        {
          props.candidateList.slice(1).map(candidate => {
            return(
              <Card className={'referView_Card'}>
                <Card.Body>
                  <Card.Title>{candidate.seeker_name}</Card.Title>
                  <Card.Text>{candidate.seeker_job_title}</Card.Text>
                  <Button>Refer</Button>
                </Card.Body>
              </Card>
            )
          })
        }
      </div>
      <Button className='referView_all_candidates' variant="info">Refer All Candidates</Button>
    </div>
  )
}

export default GiverShortLists;