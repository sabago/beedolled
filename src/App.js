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

// TWILIO_AUTH = 704158ecf9c5f2339b0107888bfb43b0
// TWILIO_SID = ACeedaec71ff939196827766e20feab13d
// TWILIO_NUMBER = 2057085042

// COSMIC_BUCKET = beedolled
// COSMIC_READ_KEY = Y7bHNO2rtkwIvMd4RsrttOMCHFEegvWTOuKyc3zrTl6xOQytc9
// COSMIC_WRITE_KEY = 5IN7lPp0TBk2x2ASnillQsTbFHCMI7bAnqRIx7K6w7Il9frtdU

// COSMIC_BUCKET2 = beedolled-blog
// COSMIC_READ_KEY2 = Ik1N73r4pGOrMrU0p5qqAROfYhBztleD3nUfZo5KtdFgkFIdFU
// COSMIC_WRITE_KEY2 = 8s27QZep18rKfTxWXYUwkVNTQXxeEDjP8YTlEsT7DUjCV140o7

// REACT_APP_EMAILJS_SERVICEID = service_p29mryi
// REACT_APP_EMAILJS_TEMPLATEID = template_b5wg8r7
// REACT_APP_EMAILJS_USERID = user_Iza8lLVZ2tkUfZ5STVrwz