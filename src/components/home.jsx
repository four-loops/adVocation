import React, {Component} from 'react';
import { BrowserRouter as Redirect, NavLink } from "react-router-dom";
import { Container, Row, Col, Card, Button, Jumbotron, Alert } from 'react-bootstrap';


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      diversityPledge: false,
      seeker_see_name: false
    }; 
    this.submitGiverFormData = this.submitGiverFormData.bind(this);
    this.handleDiversityCheckboxChange = this.handleDiversityCheckboxChange.bind(this);
    this.handleEmailShareCheckboxChange = this.handleEmailShareCheckboxChange.bind(this);
  }

  handleDiversityCheckboxChange() {
    let isChecked = this.state.diversityPledge;
    this.setState({
      diversityPledge: !isChecked
    }, console.log(this.state.diversityPledge))
  }

  handleEmailShareCheckboxChange() {
    let isChecked = this.state.seeker_see_name;
    this.setState({
      seeker_see_name: !isChecked
    }, console.log(this.state.seeker_see_name))
  }

  verifyPledgeAgreement(){
    if (this.state.diversityPledge === false) {
      // return (
      //   <Alert variant="danger" onClose={() => setShow(false)} dismissible>
      //     <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      //     <p>
      //       This app is designed for people who support inclusion in the workplace!
      //     </p>
      //   </Alert>
      // );
    }
  }

  submitGiverFormData(event){
    event.preventDefault();
    let form = event.target
    this.verifyPledgeAgreement();
    let formData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
      linkedin_url: form.elements.linkedin_url.value,
      hr_contact: form.elements.hr_contact.value,
      seeker_see_name: (form.elements.seeker_see_name.value === 'on' ? true : false)
    }
    console.log(formData)

  }



  render() {
    return (
      <div className='home_content_container'>

        <div className='home_Container'>

          <h1>adVocation</h1>
          <span className='home_motto'>Creating more diverse workplaces through inclusive hiring</span>
          <div className='home_signup_section'>
            <p>I want to make my workplace more diverse and inclusive through hiring</p>
            <div className='home_SignUpButtonHolder'>
              <NavLink to={{
                pathname: '/GiverSignUp',
                props: {
                  submitGiverFormData: this.submitGiverFormData,
                  handleDiversityCheckboxChange: this.handleDiversityCheckboxChange,
                  handleEmailShareCheckboxChange: this.handleEmailShareCheckboxChange
                }
              }}>
                <Button className='home_SignUpButton'>Sign Up</Button>
              </NavLink>
              <NavLink to='/GiverLanding'>
                <Button className='home_SignUpButton'>Log In</Button>
              </NavLink>
            </div>
          </div>

          <div className='home_signup_section'>
            <p>I want to make my workplace more diverse and inclusive through hiring</p>
            <div className='home_SignUpButtonHolder'>
              <NavLink to='/SeekerSignUp'>
                <Button className='home_SignUpButton' variant='info'>Sign Up</Button>
              </NavLink>
              <NavLink to='/seeker'>
                <Button className='home_SignUpButton' variant='info'>Log In</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Home;

