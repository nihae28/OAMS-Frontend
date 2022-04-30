import { Component } from "react";
import './TrafficControllerExamDdetails.css';
export default class TrafficController extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div class="centre">
                <h6>Traffic Controller Interface</h6>
                </div>
                <div class="centre">
                    <a href="/trafficControllerExamDetails" style={{marginRight: 5 + 'em'}}>
                        <button>
                            Traffic Controller Exam Details
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
