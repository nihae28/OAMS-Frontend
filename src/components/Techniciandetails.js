import React, {useState, useEffect, Component} from 'react'
import TechnicianService from '../services/TechnicianService';
import './Techniciandetails.css';

export default class Techniciandetails extends Component {
  constructor() {
      super();
      this.state = {
      }
  }

render(){
    return (
      <div>
        <div class="centre">
                <h6>Technician Interface</h6>
                </div>
                <div class="centre">
                    <a href="/faatests" style={{marginRight: 5 + 'em'}}>
                        <button>
                            Test Details
                        </button>
                    </a>
                    <a href="/airplaneDetailsSearch">
                        <button>
                            Airplane Details
                        </button>
                    </a>                    
                </div>
    </div>
    )
}
}