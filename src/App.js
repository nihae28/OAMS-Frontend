import React, { Component, } from 'react';
import {Route, Routes,BrowserRouter} from 'react-router-dom';
import '.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import TrafficController from './TrafficController';
import TrafficControllerExamDetails from './TrafficControllerExamDetails';
import TrafficControllerAirplaneSearch from './TrafficControllerAirplaneSearch';
 
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
          <Route path='traffic-controller' element={<TrafficController/>}/>
          <Route path='trafficControllerExamDetails' element={<TrafficControllerExamDetails/>}/>
          <Route path='airplaneDetailsSearch' element={<TrafficControllerAirplaneSearch/>}/>
        </Routes>
      </BrowserRouter>,
    
     </React.Fragment>
    );
  }
}



export default App;