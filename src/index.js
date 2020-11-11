import React from 'react';
import ReactDom from 'react-dom';
import App from "./App";

import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb-free.css';

import '@fortawesome/fontawesome-free/css/all.min.css'; 
{/* <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"> */}
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import 'normalize.css'

require('./scss/app.scss')

window.React = React

ReactDom.render(
  <Router basename={process.env.PUBLIC_URL}>
    < App />
  </Router>,  
  document.getElementById('root')
)
