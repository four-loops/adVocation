import React from 'react';
import { NavLink } from "react-router-dom";
import { Button } from 'react-bootstrap';

class SeekerProfile extends React.Component {
// const SeekerProfile = (props) => {
  constructor(props) {
    super(props);
    this.state = {
      job_seeker_id: 0,
      name: 'Bob',
      profile_url: '',
      email: 'bob@gmail.com',
      linkedin_url: 'linkedin.com/bob',
      selling_points: ['a', 'b', 'c'],
      industry: 'auto',
      level_of_experience: 2,
      location: 'austin'
    };
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className='seekerProfile_Container'>
          <h1>Profile</h1>
        <div>
          <img src={this.state.name.profile_url}></img>
          <p>Name: {this.state.name}</p>
          <p>Email: {this.state.email}</p>
          <p>LinkedIn: {this.state.linkedin_url}</p>
          <p>Selling Points: {this.state.selling_points}</p>
          <p>Industry: {this.state.industry}</p>
          <p>Years of Experience: {this.state.level_of_experience}</p>
          <p>Location: {this.state.location}</p>
        </div>
        <div className='seekerProfile_buttonWrapper'>
          <NavLink to='/SeekerSignUp'>
            <Button className='seekerProfile_button'>Edit Profile</Button>
          </NavLink>
          <NavLink to='/seeker'>
            <Button className='seekerProfile_button'>Back</Button>
          </NavLink>
        </div>
      </div>
    );
  }
};

export default SeekerProfile;