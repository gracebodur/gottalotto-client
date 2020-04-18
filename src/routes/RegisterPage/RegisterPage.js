import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import Nav from '../../components/Nav/Nav';

class RegisterPage extends Component {
	static defaultProps = {
		history: {
			push: () => { },
		},
	}

	handleRegistrationSuccess = () => {
		const { location, history } = this.props;
		const destination = (location.state || {}).from || "/login";
		history.push(destination);
	}

	render() {
		return (
			<section className='RegistrationPage'>
				<header>
					<Nav />
				</header>
				<RegistrationForm
					onRegistrationSuccess={this.handleRegistrationSuccess} />
			</section>
		)
	}
}

export default RegisterPage