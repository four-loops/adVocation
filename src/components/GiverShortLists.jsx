import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import Octicon, {iconsByName} from '@primer/octicons-react'

class GiverShortLists extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      candidates: [
        ['Front End Developer', {seeker_name: 'Edmund Velazquez', seeker_job_title: 'Waiter'}, {seeker_name: 'Marcia Ware', seeker_job_title: 'Advertising Copywriter'}, {seeker_name: 'Lori Dean', seeker_job_title: 'Animator'}, {seeker_name: 'Dominique Ortega', seeker_job_title: 'Hair Stylist'}, {seeker_name: 'Sung Malone', seeker_job_title: 'Park Ranger'} , {seeker_name: 'Gretchen Park', seeker_job_title: 'Private Detective'}],
        ['Full Stack Developer', {seeker_name: 'Amelia Earhart', seeker_job_title: 'Pilot'}, {seeker_name: 'Millie Zamora', seeker_job_title: 'Coffee Runner'}, {seeker_name: 'Jody Sparks', seeker_job_title: 'Nutritionist'}, {seeker_name: 'Erick Rasmussen', seeker_job_title: 'Meteorologist'}, {seeker_name: 'Bettye Flores', seeker_job_title: 'Music Therapist'} , {seeker_name: 'Dwain Navarro', seeker_job_title: 'Columnist'}], 
        ['Designer', {seeker_name: 'Oscar Grouch', seeker_job_title: 'Waste Management Professional'}, {seeker_name: 'Fay Li', seeker_job_title: 'Organic Farm Manager'}, {seeker_name: 'Bernie Chen', seeker_job_title: 'Pastry Chef'}, {seeker_name: 'Tina Wise', seeker_job_title: 'City Planner'}, {seeker_name: 'Vince Pace', seeker_job_title: 'Dance Instructor'} , {seeker_name: 'Emil Douglas', seeker_job_title: 'Teacher'}]
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
                <Card.Body className='referView_CardBody'>
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