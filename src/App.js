import React, { Component, } from 'react';
import {Route, Routes, BrowserRouter, useParams} from 'react-router-dom';
import '.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import TrafficController from './TrafficController';
import TrafficControllerExamDetails from './TrafficControllerExamDetails';
import TrafficControllerAirplaneSearch from './TrafficControllerAirplaneSearch';



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
        <Routes>
          <Route path="user" element={<Test />} />
          <Route path="login" element={<Login />} />
            <Route path='traffic-controller/:ssn' element={<TrafficControllerWrapper/>}/>
          <Route path='trafficControllerExamDetails/:ssn' element={<TrafficControllerExamDetailsWrapper/>}/>
          <Route path='airplaneDetailsSearch/:ssn' element={<TrafficControllerAirplaneSearchWrapper/>}/>
        </Routes>
      </BrowserRouter>,
    
     </React.Fragment>
    );
  }
}



export default App;