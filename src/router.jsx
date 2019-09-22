import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/home.jsx'
import ViewCandidates from './components/candidateList.jsx';
import Seeker from './components/Seeker.jsx';
import GiverLanding from './components/GiverLanding.jsx';
import GiverSignUp from './components/GiverSignUp.jsx';
import SeekerSignUp from './components/SeekerSignUp.jsx';
import JobList from './components/JobList.jsx';
import GiverShortLists from "./components/GiverShortLists.jsx";
import SeekerProfile from "./components/SeekerProfile.jsx";

function RouteManager() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/ViewCandidates" component={ViewCandidates} />
        <Route path="/GiverLanding" component={GiverLanding} />
        <Route path="/GiverSignUp" component={GiverSignUp} />
        <Route path="/SeekerSignUp" component={SeekerSignUp} />
        <Route path="/seeker" component={Seeker} />
        <Route path="/jobs" component={JobList} />
        <Route path='/GiverShortLists' component={GiverShortLists} />
        <Route path="/seekerprofile" component={SeekerProfile} />
      </div>
    </Router>
  );
}

export default RouteManager;