import React, { Component } from 'react'
import './Techniciandetails.css';

export default class Techniciandetails extends Component {
  constructor(props) {
      super(props);
      this.state = {
      }
  }

render(){
    console.log(this.props.match.params.ssn)
    return (
      <div>
        <div class="centre">
                <h6>Technician Interface</h6>
                </div>
                <div class="centre">
                    <a onClick={this.navigateTofaaTests} style={{marginRight: 5 + 'em'}}>
                        <button>
                            FAA TESTS
                        </button>
                    </a>
                    <a onClick={this.navigateToAirplaneSearch}>
                        <button>
                            Airplane Details
                        </button>
                    </a>                 
                </div>
    </div>
    )
}
    navigateTofaaTests = (e) => {
        e.preventDefault();
        window.location.href = `/faatests/${this.props.match.params.ssn}`;
    }
    navigateToAirplaneSearch = (e) => {
        e.preventDefault();
        window.location.href = `/airplaneDetailsSearch/${this.props.match.params.ssn}`;
    }
}