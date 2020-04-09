import React, { Component } from 'react'
import SubmitGuessForm from '../../components/SubmitGuessForm/SubmitGuessForm';
import Nav from '../../components/Nav/Nav';

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