import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from'./app.jsx';
import ViewCandidates from './candidateList.jsx'

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<ViewCandidates />, document.getElementById('candidate-list'))