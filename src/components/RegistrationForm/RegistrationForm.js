import React, { Component } from 'react'
import Typical from 'react-typical'
import { Link } from 'react-router-dom'
import './RegistrationForm.css'
import user from '../../img/user.svg'
import AuthApiService from "../../services/auth-api-service"

class RegistrationForm extends Component {
	static defaultProps = {
		onRegistrationSuccess: () => {}
	}

	state = { error: null }

	// constructor() {
	// 	super();
	// 	this.state = {
	// 		full_name: "",
	// 		user_name: "",
	// 		password: "",
	// 		error: null
	// 	};
	// }

	handleSubmit = ev => {
		ev.preventDefault()
		const { full_name, user_name, password } = ev.target
	
		this.setState({ error: null })
		AuthApiService.postUser({
		  user_name: user_name.value,
		  password: password.value,
		  full_name: full_name.value,
		})
		  .then(user => {
			full_name.value = ''
			user_name.value = ''
			password.value = ''
			this.props.onRegistrationSuccess()
		  })
		  .catch(res => { this.setState({ error: res.error })
		})
	  }

	// handleSubmit = (ev, data) => {
	// 	ev.preventDefault();
	// 	this.setState({ error: null });
	// 	AuthApiService.postUser(data)
	// 		.then(this.props.onRegistrationSuccess())
	// 		.catch(res => this.setState({ error: res.error }))
	// };

	// handleChange = event => {
	// 	const { name, value, type, checked } = event.target;
	// 	type === "checkbox"
	// 		? this.setState({ [name]: checked })
	// 		: this.setState({ [name]: value });
	// };

	render() {
		// const { full_name, user_name, password } = this.state
		const { error } = this.state;
		return (
			<section className="register">
				<Typical
					steps={["Register", 1000, "", 500]}
					loop={Infinity}
					wrapper="h2"
				/>
				<div className="registerText">
					<p>Please fill in this form to create an account.</p>
				</div>
				<form
					className="registerForm"
					// onSubmit={event => {
					// 	const data = this.state;
					// 	this.handleSubmit(event, data);
					// }}
					onSubmit={this.handleSubmit}
				>
					<div className='error-register' role="alert">{error && <p className="red-register">{error}</p>}</div>
					<div className="infocontainer">
						<img src={user} alt="sign up" className="info"></img>
					</div>


					<div className="formItem">
						<div className="registerItem">
							<label htmlFor="full_name"><b>Full Name</b></label>
							<input
								type="text"
								placeholder="Enter Full Name"
								name="full_name"
								// value={full_name}
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
								// value={user_name}
								// onChange={this.handleChange}
								required
							/>
						</div>

						<div className="registerItem">
							<label htmlFor="psw"><b>Password</b></label>
							<input
								type="password"
								placeholder="Enter Password"
								name="password"
								// value={password}
								// onChange={this.handleChange}
								required
							/>
						</div>

						<button type="submit" className="registerbtn">Register</button>
					</div>
				</form>

				<div className="form-link">
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

