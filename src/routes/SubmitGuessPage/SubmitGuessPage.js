import React, { Component } from 'react'
import SubmitGuessForm from '../../components/SubmitGuessForm/SubmitGuessForm';
import Nav from '../../components/Nav/Nav';
import WeeksApiService from '../../services/weeks-api-service'
import UserContext from '../../contexts/userContext'
import Footer from '../../components/Footer/Footer';

class SubmitGuessPage extends Component {
	handleSubmitSuccess = () => {
		const { location, history } = this.props;
		const destination = (location.state || {}).from || "/guesslist";
		history.push(destination);
	}
	render() {
		return (
			<div>
				<header>
					<Nav />
				</header>
				<SubmitGuessForm onSubmitSuccess={this.handleSubmitSuccess} />
				<Footer />
			</div>
		)
	}
}

export default SubmitGuessPage