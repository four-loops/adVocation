import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Button } from 'react-bootstrap';
import Octicon, {iconsByName} from '@primer/octicons-react'
import { NavLink } from "react-router-dom";

class ViewCandidates extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      candidates: [1, 2, 3, 4, 5, 6, 7, 8, 9, ],
      shortList: []
    }

  }


  render() {
    console.log(this.state.candidates)
    return(
      <div className='candidateList_body'>
        <h1>Candidates</h1>
        <div className='candidateList_CardDeck'>
          {
            this.state.candidates.map(candidate => {
              return (
                <Card className='candidateList_Card'>
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text className='candidateList_CardBody'>
                      This is a wider card with supporting text below as a natural lead-in to
                      additional content. This content is a little bit longer.
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

