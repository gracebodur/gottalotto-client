import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

class RegisterPage extends Component {
	static defaultProps = {
		history: {
			push: () => { },
		},
	}

	handleRegistrationSuccess = user => {
		const { history } = this.props
		history.push('/')
	}

	render() {
		return (
			<section className='RegistrationPage'>
				<RegistrationForm
					onRegistrationSuccess={this.handleRegistrationSuccess} />
			</section>
		)
	}
}

export default RegisterPage