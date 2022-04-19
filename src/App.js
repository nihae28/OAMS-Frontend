import React, { Component, } from 'react';
 import {Route, Routes,BrowserRouter} from 'react-router-dom';
 import '.././node_modules/bootstrap/dist/css/bootstrap.min.css';
 
// import {Route} from 'react-router-dom';
// import {BrowserRouter as Router} from 'react-router-dom';


import Test from './Test';
import Login from './Login';

class App extends Component {

  render() {
    return(
     <React.Fragment>  
       <BrowserRouter>
        <Routes>
          <Route path="user" element={<Test />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>,
    
     </React.Fragment>
    );
  }
}



export default App;