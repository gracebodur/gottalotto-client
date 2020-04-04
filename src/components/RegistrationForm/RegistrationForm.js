import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class RegistrationForm extends Component {
	render() {
		return (
			<div>
				<form>
					<div className="container">
						<h1>Register</h1>
						<p>Please fill in this form to create an account.</p>

						<label htmlFor="first_name"><b>First Name</b></label>
						<input type="text" placeholder="Enter First Name" name="first_name" required />

						<label htmlFor="last_name"><b>Last Name</b></label>
						<input type="text" placeholder="Enter Last Name" name="last_name" required />

						<label htmlFor="user_name"><b>User Name</b></label>
						<input type="text" placeholder="Enter User Name" name="user_name" required />

						<label htmlFor="psw"><b>Password</b></label>
						<input type="password" placeholder="Enter Password" name="psw" required />

						<button type="submit" className="registerbtn">Register</button>
					</div>


				</form>

				<div className="container login">
					<p>Already have an account? <Link to='/login'>Login</Link></p>
				</div>
			</div>
		)
	}
}

export default RegistrationForm