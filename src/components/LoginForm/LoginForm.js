import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LoginForm extends Component {
	render() {
		return (
			<div>
				<form >
					<div className="imgcontainer">
						<img src="./avatar.png" alt="Avatar" className="avatar" />
					</div>

					<div className="container">
						<label for="uname"><b>Username</b></label>
						<input type="text" placeholder="Enter Username" name="uname" required />

						<label for="psw"><b>Password</b></label>
						<input type="password" placeholder="Enter Password" name="psw" required />

						<button type="submit">Login</button>
						<label>
							<input type="checkbox" checked="checked" name="remember" /> Remember me
              </label>
					</div>

					<div className="container">
						<button type="button" className="cancelbtn">Cancel</button>
					</div>
				</form>
				<div className="container login">
					<p>Don't yet have an account? <Link to='/register'>Register</Link></p>
				</div>
			</div>
		)
	}
}

export default LoginForm