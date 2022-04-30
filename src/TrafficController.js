import { Component } from "react";
import './TrafficControllerExamDdetails.css';


export default class TrafficController extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        console.log(this.props.match.params.ssn)
        return (
            <div>
                <div class="centre">
                <h6>Test Controller Interface</h6>
                </div>
                <div class="centre">
                    <a onClick={this.navigateToExamDetails} style={{marginRight: 5 + 'em'}}>
                        <button>
                            Test Controller Exam Details
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
    navigateToExamDetails = (e) => {
        e.preventDefault();
        window.location.href = `/trafficControllerExamDetails/${this.props.match.params.ssn}`;
    }
    navigateToAirplaneSearch = (e) => {
        e.preventDefault();
        window.location.href = `/airplaneDetailsSearch/${this.props.match.params.ssn}`;
    }

}

