import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Button } from 'react-bootstrap';
import Octicon, {iconsByName} from '@primer/octicons-react'
import { NavLink } from "react-router-dom";
import axios from 'axios';

class ViewCandidates extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      candidates: [],
      shortList: []
    }
    
    this.getJobs = this.getJobs.bind(this);

  }

  getJobs() {
    axios.get('http://3.17.167.107/getCandidates', {
      params: {
        company_id: 1
      }
    })
    .then(({ data }) => {
      console.log(data)
      this.setState({candidates: data})
    })
    .catch(error => console.log(error))
  }
  
  componentDidMount() {
    this.getJobs();
  }

  render() {
    return(
      <div className='candidateList_body'>
        <h1>Candidates</h1>
        <div className='candidateList_CardDeck'>
          {
            this.state.candidates.map(candidate => {
              return (
                <Card className='candidateList_Card'>
                  <Card.Body>
                    <Card.Title>{candidate.seeker_name}</Card.Title>
                    <Card.Text className='candidateList_CardBody'>
                        {candidate.selling_points.map((point) => {
                          return (
                            <p>{point}</p>
                          );
                        })}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                  <div className='candidateList_ButtonHolder'>
                    <Button className='candidateList_Button'>Shortlist Candidate</Button>
                    <Button className='candidateList_Button'>Refer Now!</Button>
                  </div>
                  </Card.Footer>
                </Card>
              )
            })
          }
        </div>

        <div className='candidateList_BottomButtonHolder'>
          <NavLink to='/GiverLanding'>
            <Button className='candidateList_BottomButton'>
              <Octicon icon={iconsByName['arrow-left']}/>
              Openings
            </Button>
          </NavLink>
          <NavLink to='/GiverShortLists'>
            <Button className='candidateList_BottomButton'>View Shortlists</Button>
          </NavLink>
        </div>
        
      </div>
    )
  }
}

export default ViewCandidates;

