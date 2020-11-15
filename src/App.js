import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Router basename={process.env.PUBLIC_URL}>
          <Routes/>        
        </Router> 
    </React.StrictMode>
    </div>
  );
}

export default App;

