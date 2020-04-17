import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './RegistrationForm.css'
// import UserContext from "../../contexts/userContext"
import AuthApiService from "../../services/auth-api-service"

class RegistrationForm extends Component {
	// static contextType = UserContext;

	constructor() {
		super();
		this.state = {
			full_name: "",
			user_name: "",
			password: "",
		};
	}
	handleSubmit = (ev, data) => {
		ev.preventDefault();

		AuthApiService.postUser(data)
			.then()
			.catch(this.context.setError);
		// const { location, history } = this.props;
		// const destination = (location.state || {}).from || "/";
		// history.push(destination);
	};

	handleChange = event => {
		const { name, value, type, checked } = event.target;
		type === "checkbox"
			? this.setState({ [name]: checked })
			: this.setState({ [name]: value });
	};


	render() {
		const { full_name, user_name, password } = this.state
		return (
			<section className="register">
				<h1>Register</h1>
				<div className="registerText">
					<p>Please fill in this form to create an account.</p>
				</div>
				<form
					className="registerForm"
					onSubmit={event => {
						const data = this.state;
						this.handleSubmit(event, data);
					}}
				>
					<div className="registerText">
						<div className="registerItem">
						<label htmlFor="full_name"><b>Full Name</b></label>
						<input
							type="text"
							placeholder="Enter Full Name"
							name="full_name"
							value={full_name}
							onChange={this.handleChange}
							required
						/>
						</div>

						<div className="registerItem">
						<label htmlFor="user_name"><b>User Name</b></label>
						<input
							type="text"
							placeholder="Enter User Name"
							name="user_name"
							value={user_name}
							onChange={this.handleChange}
							required
						/>
						</div>

						<div className="registerItem">
						<label htmlFor="psw"><b>Password</b></label>
						<input
							type="password"
							placeholder="Enter Password"
							name="password"
							value={password}
							onChange={this.handleChange}
							required
						/>
						</div>

						<button type="submit" className="registerbtn">Register</button>
					</div>
				</form>

				<div className="container-login">
					<p>Already have an account? <Link to='/login'>Login</Link></p>
					<Link to="/" className="aButton">
						Go Back Home
          </Link>
				</div>
			</section>
		)
	}
}


export default RegistrationForm;
