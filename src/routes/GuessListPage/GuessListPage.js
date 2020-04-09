import React, { Component } from 'react'
import GuessList from '../../components/GuessList/GuessList';
import Nav from '../../components/Nav/Nav';
import GuessesApiService from '../../services/guesses-api-service'
import GuessListContext from '../../contexts/guessListContext'

class GuessListPage extends Component {
	static contextType = GuessListContext;
	componentDidMount() {
		this.context.clearError();
		GuessesApiService.getAllGuesses()
			.then(this.context.setGuessList)
			.catch(this.context.setError);
	}
	componentDidMount() {
		this.context.clearError();
		GuessesApiService.getAllGuesses()
			.then(this.context.setGuessList)
			.catch(this.context.setError);
	}

	render() {
		return (
			<div>
				<header>
					<Nav />
				</header>
				<GuessList />
			</div>
		)
	}
}

export default GuessListPage