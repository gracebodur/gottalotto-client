import React, { Component } from 'react'
import SubmitGuessForm from '../../components/SubmitGuessForm/SubmitGuessForm';
import Nav from '../../components/Nav/Nav';
import WeeksApiService from '../../services/weeks-api-service'
import UserContext from '../../contexts/userContext'

class SubmitGuessPage extends Component {
	render() {
		return (
			<div>
				<header>
					<Nav />
				</header>
				<SubmitGuessForm />
			</div>
		)
	}
}

export default SubmitGuessPage