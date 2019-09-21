import React from 'react';
import ReactDOM from 'react-dom';
import { ListGroup, Button } from 'react-bootstrap';

class GiverLanding extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      jobs: [1,2,3,4,5,6,7,8,9]
    }

  }

  render() {
    return(
      <div id='giverLanding_Body'>
        <h2>Hello, Name!</h2>
        <h4>Here are jobs listed at COMPANY that you can refer for:</h4>
        <div className='giverLanding_ListContainer'>
          <ListGroup>
            {
              this.state.jobs.map(job => {
                return (
                <ListGroup.Item>Test</ListGroup.Item>
                )
              })
            }
          </ListGroup>
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

