import React,{ Component } from 'react';
import styles from './Login.module.css';
import {FormControl, FormGroup, Button, Form} from 'react-bootstrap';

export default class Login extends Component {


		constructor() {
			super();


			this.state = {
				adminLogin:false,
				loginFields : {
					email : '',
					password : ''
				},
				loginAdminFields:{
					email:'',
					password:''
				},
				errors:{
					email:'email format should be xxx@xxx.xxx',
					pwd:'',
				},
				isLoggedIn : false,
				isAdmin:false
			}
		}	

		render(){
			{
			if (!this.state.isLoggedIn && !this.state.isAdmin && !this.state.adminLogin)
			return (
			<div className = {styles.signup}>
				<h2 className={styles.h2}>Login</h2>
				<Form  name="loginForm"  id ="loginForm" onSubmit={this.loginHandler}>
					<FormGroup className={styles.formgroup}>
						<FormControl type="text" className={styles.formcontrol} placeholder="Email" name="email" 
						onChange={this.employeeInputHandler} required/>
					</FormGroup>
					<br></br>
					<FormGroup className={styles.formgroup}>        
						<FormControl type="password" className={styles.formcontrol} placeholder="Password" 
						name="password" onChange={this.employeeInputHandler} required/>
					</FormGroup>
					<br></br>
					<FormGroup className={styles.formgroup}>        
						<Button type="submit" className="btn btn-primary">Login</Button>
					</FormGroup>
					<br></br>
					<p>Are you a admin? <a onClick={this.changeAdminLogin}>Login as admin</a></p>
				</Form>
			</div>
			)

			else if(this.state.adminLogin)
			return(
				<div className = {styles.signup}>
				<h2 className={styles.h2}>Login as admin</h2>
				<Form  name="adminForm"  id ="adminForm" onSubmit={this.loginAdminHandler}>
					<FormGroup className={styles.formgroup}>
						<FormControl type="text" className={styles.formcontrol} placeholder="Email" 
						name="email" onChange={this.adminInputHandler} required/>
					</FormGroup>
					<br></br>
					<FormGroup className={styles.formgroup}>        
						<FormControl type="password" className={styles.formcontrol} 
						placeholder="Password" name="password" onChange={this.adminInputHandler} required/>
					</FormGroup>
					<br></br>
					<FormGroup className={styles.formgroup}>        
						<Button type="submit" className="btn btn-primary">Login</Button>
					</FormGroup>
					<br></br>
					<p>Are you a user? <a onClick={this.changeUserLogin}>Login as user</a></p>
				</Form>
			</div>
			)
		
		}
	};
				
	// employee login
	employeeInputHandler = e => {
		let loginFields = {...this.state.loginFields};
		loginFields[e.target.name] = e.target.value;
		this.setState({
			loginFields
		});
		
	}

	//admin login
	adminInputHandler = e => {
		let loginAdminFields = {...this.state.loginAdminFields};
		loginAdminFields[e.target.name] = e.target.value;
		this.setState({
			loginAdminFields
		});	
	}
	
	loginHandler = e => {
		console.log('i am inside login handler');
		console.log(this.state.loginFields.email);
		e.preventDefault();
		//clears the form
		let form = document.getElementById("loginForm");
		form.reset();
		fetch('/user/login',{
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email : this.state.loginFields.email ,
				password : this.state.loginFields.password ,
			}),
		})
		.then( (res) => {
			console.log("I am result");
			console.log(res);
			this.setState({
				loginFields : {
					email : '',
					password : ''
				},
				loginAdminFields : {
					email : '',
					password : ''
				},
			});

			if(res.status >= 400) {
				alert("Server responds with error!");
			} else{
				console.log("i am result"+res);
				return res.json()
			}
				
		}).
		then(async (response) => {
			if (response.role.toLowerCase() === "traffic controller") {
				window.location.href = `/traffic-controller/${response.ssn}`;
			}
			else if (response.role.toLowerCase() === "technician") {
				window.location.href = `/technician/${response.ssn}`;
			}
			else if (response.role.toLowerCase() === "admin") {
				window.location.href = `/admin/${response.ssn}`;
			}
		}).catch(error => {
			console.error('Error during login:', error);
		});
	}
	//admin login handler
	loginAdminHandler = e => {
		e.preventDefault();
		//clears the form
		let form = document.getElementById("adminForm");
		form.reset();
		fetch('/user/adminlogin',{
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email : this.state.loginAdminFields.email ,
				password : this.state.loginAdminFields.password ,
			}),
		})
		.then(res => res.json())
		.then( (res) => {
			console.log("I am admin result");
			console.log(res);
			this.setState({
				loginFields : {
					email : '',
					password : ''
				},
				loginAdminFields : {
					email : '',
					password : ''
				},
			});

			if(res.status >= 400) {
				alert("Server responds with error!");
			} else{
				console.log("i am result"+res);
				alert("Login successful");
			}
		}).catch(error => {
			console.error('Error during login:', error);
		});
	}

	changeUserLogin = (e) =>{

		this.setState({
			loginFields : {
				email : '',
				password : ''
			},
			loginAdminFields : {
				email : '',
				password : ''
			},
		});

		this.setState({
			adminLogin:false,
		})
	}
	changeAdminLogin = (e) => {
		var x = this.state.adminLogin;
		this.setState({
			adminLogin : !(x)
		})

		console.log('after change admin state:'+this.state.adminLogin);

		this.setState({
			loginFields : {
				email : '',
				password : ''
			},
			loginAdminFields : {
				email : '',
				password : ''
			},
		});
	}
}
