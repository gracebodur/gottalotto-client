import React, { Component } from 'react'
import Guess from '../Guess/Guess'
import GuessListContext from '../../contexts/guessListContext'

import './GuessList.css'

class GuessList extends Component {
	static contextType = GuessListContext;

	renderGuesses() {
		const { guessList = [] } = this.context;
		return guessList.map(guess => (
			<Guess key={guess.guess_id} guess={guess} />
		));
	}
	render() {
		const { error } = this.context;

		return (
			<section className="guessList" >
				{error ? (<p className="red">There was an error, try again</p>)
					: (this.renderGuesses())}
			</section>
		)
	}
}

export default GuessList
