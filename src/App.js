import React, { Component, } from 'react';
 import {Route, Routes,BrowserRouter} from 'react-router-dom';

// import {Route} from 'react-router-dom';
// import {BrowserRouter as Router} from 'react-router-dom';


import Test from './Test';

class App extends Component {

  render() {
    return(
     <React.Fragment>  
       <BrowserRouter>
        <Routes>
          <Route path="user" element={<Test />} />
        </Routes>
      </BrowserRouter>,
    
     </React.Fragment>
    );
  }
}



export default App;