import React, { Component } from 'react'
import Guess from '../Guess/Guess'
import GuessListContext from '../../contexts/guessListContext'
import GuessesApiService from '../../services/guesses-api-service'

class GuessList extends Component {
	static contextType = GuessListContext;

	renderGuesses() {
		const { guessList = [] } = this.context;
		console.log('guesslist: ', guessList)
		return guessList.map(guess => (
			<Guess key={guess.guess_id} guess={guess} />
		));
	}
	render() {
		const { error } = this.context;
		return (
			<section>
				<h2>Everyone else's guesses:</h2>
				{error ? (
					<p className="red">There was an error, try again</p>
				) : (
						this.renderGuesses()
					)}
				<a href='https://www.powerball.com/games/home'><p>Power Ball Official Website</p></a>
			</section>
		)
	}
}

export default GuessList