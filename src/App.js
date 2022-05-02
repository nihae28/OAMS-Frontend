import React, { Component, } from 'react';
import {Route, Routes, BrowserRouter, useParams} from 'react-router-dom';
import '.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import TrafficController from './TrafficController';
import Home from './Home';
import TrafficControllerExamDetails from './TrafficControllerExamDetails';
import TrafficControllerAirplaneSearch from './TrafficControllerAirplaneSearch';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';

import AddEmployeeComponent from './components/AddEmployeeComponent';
import AddAirplaneModel from './components/AddAirplaneModel';
import AddExpertController from './components/AddExpertController';
import AddFAATestController from './components/AddFAATestController';
import AddPlaneController from './components/AddPlaneController';

import Techniciandetails from './components/Techniciandetails';


// import {Route} from 'react-router-dom';
// import {BrowserRouter as Router} from 'react-router-dom';


import Test from './Test';
import Login from './Login';

class App extends Component {

  render() {

      const TrafficControllerWrapper = (props) => {
          const params = useParams();
          return <TrafficController {...{...props, match: {params}} } />
      }
      const TrafficControllerExamDetailsWrapper = (props) => {
          const params = useParams();
          return <TrafficControllerExamDetails {...{...props, match: {params}} } />
      }
      const TrafficControllerAirplaneSearchWrapper = (props) => {
          const params = useParams();
          return <TrafficControllerAirplaneSearch {...{...props, match: {params}} } />
      }
    return(
     <React.Fragment>  
       <BrowserRouter>
           <HeaderComponent />
        <Routes>
          <Route path='home' element={<Home/>}/>
          <Route path="user" element={<Test />} />
          <Route path="login" element={<Login />} /><Route path='traffic-controller/:ssn' element={<TrafficControllerWrapper/>}/>
          <Route path='trafficControllerExamDetails/:ssn' element={<TrafficControllerExamDetailsWrapper/>}/>
          <Route path='airplaneDetailsSearch/:ssn' element={<TrafficControllerAirplaneSearchWrapper/>}/>
          <Route path='traffic-controller' element={<TrafficController/>}/>
          <Route path='trafficControllerExamDetails' element={<TrafficControllerExamDetails/>}/>
          <Route path='airplaneDetailsSearch' element={<TrafficControllerAirplaneSearch/>}/>
          <Route path = "/add-employee" component = {AddEmployeeComponent} ></Route>
          <Route path = "/edit-employee/:ssn" component = {AddEmployeeComponent}></Route>
          <Route path = "/airplanemodels" component = {AddAirplaneModel}></Route>
          <Route path = "/experts" component = {AddExpertController}></Route>
          <Route path = "/faatests" component = {AddFAATestController}></Route>
          <Route path = "/planes" component = {AddPlaneController}></Route>

          <Route path = "/techniciandetails" component = {Techniciandetails}></Route>
        </Routes>
           <FooterComponent />
      </BrowserRouter>,
    
     </React.Fragment>
    );
  }
}



export default App;
