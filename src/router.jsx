import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './home.jsx'
import ViewCandidates from './candidateList.jsx';

function RouteManager() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/ViewCandidates" component={ViewCandidates} />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ViewCandidates">ViewCandidates</Link>
          </li>
        </ul>
      </div>
    </Router>
  );
}

export default RouteManager;
