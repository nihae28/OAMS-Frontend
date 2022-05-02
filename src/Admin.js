import { Component } from "react";
import './TrafficControllerExamDdetails.css';
export default class Admin extends Component {
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
                <h6>Admin Interface</h6>
                </div>
                <div class="centre">
                    <a onClick={this.navigateToAirplaneModel} style={{marginRight: 5 + 'em'}}>
                        <button>
                            Add Airplane Models
                        </button>
                    </a>
                    <a onClick={this.navigateToAddPlane} style={{marginRight: 5 + 'em'}}>
                        <button>
                            Add Plane Details
                        </button>
                    </a>
                    <a onClick={this.navigateToAddEmployee} style={{marginRight: 5 + 'em'}}>
                        <button>
                            Add Employee
                        </button>
                    </a>
                    <a onClick={this.navigateToAddExpert} style={{marginRight: 5 + 'em'}}>
                        <button>
                           Add Expert
                        </button>
                    </a>
                    <a onClick={this.navigateToAddFAATest} style={{marginRight: 5 + 'em'}}>
                        <button>
                           Add New FAA Test
                        </button>
                    </a>
                </div>
            </div>
        )
    }
    navigateToAirplaneModel = (e) => {
        e.preventDefault();
        window.location.href = `/airplane_models`;
    }
    navigateToAddPlane = (e) => {
        e.preventDefault();
        window.location.href = `/planes`;
    }
    navigateToAddEmployee = (e) => {
        e.preventDefault();
        window.location.href = `/add-employee`;
    }
    navigateToAddExpert = (e) => {
        e.preventDefault();
        window.location.href = `/Expert`;
    }
    navigateToAddFAATest = (e) => {
        e.preventDefault();
        window.location.href = `/faatests`;
    }

}
