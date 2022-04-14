import React,{ Component} from 'react';
import {FormControl, FormGroup, Button, Form} from 'react-bootstrap';
export default class Test extends Component {

    constructor(){
        super();
        this.state = {
            username : '',
        }	
    }

	render() { 
			return (
			<div >
				<h2 >Login</h2>
				<Form  name="userform"  id ="userform" onSubmit={this.formHandler}>
					<FormGroup >
						<FormControl type="text" name="username" onChange={this.inputChangeHandler} />
					</FormGroup>

					<FormGroup >        
						<Button type="submit" className="btn btn-primary">Add user</Button>
					</FormGroup>
				</Form>
			</div>
			)
	};

      // keeps updating the state values in signup
	inputChangeHandler = e => {
		this.setState({
            username:e.target.value
		});
	}
		
	formHandler = e => {
		let x=this.state.username;
		e.preventDefault();
		fetch(`/user/add/${this.state.username}`,{
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
		.then( (res) => {

			let form = document.getElementById("userform");
			form.reset();

            alert("HAPPY CASE!");
		});			
	}
}
