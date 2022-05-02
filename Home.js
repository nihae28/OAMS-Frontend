import { Component } from "react";
import './New.css';
export default class TrafficController extends Component {

    render() {
        console.log(this.props.match.params.ssn)
        return (
            <div class="section-center">
				<h1 class="mb-0">Online Airport System,</h1>
			</div>
        )
    }
   

}
