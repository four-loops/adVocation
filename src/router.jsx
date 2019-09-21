import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home.jsx'
import ViewCandidates from './components/CandidateList.jsx';
import Seeker from './components/Seeker.jsx';
import GiverLanding from './components/GiverLanding.jsx';

function RouteManager() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/ViewCandidates" component={ViewCandidates} />
        <Route path="/Seeker" component={Seeker} />
        <Route path="/GiverLanding" component={GiverLanding} />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ViewCandidates">ViewCandidates</Link>
          </li>
          <li>
            <Link to="/Seeker">Seeker Home</Link>
          </li>
          <li>
            <Link to="/GiverLanding">Giver Landing</Link>
          </li>
        </ul>
      </div>
    </Router>
  );
}

export default RouteManager;
