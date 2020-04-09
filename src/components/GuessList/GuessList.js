import React, { Component } from 'react'
import Guess from '../Guess/Guess'
import GuessListContext from '../../contexts/guessListContext'
import GuessesApiService from '../../services/guesses-api-service'

class GuessList extends Component {
	static contextType = GuessListContext;
	componentDidMount() {
		this.context.clearError();
		GuessesApiService.getAllGuesses()
			.then(this.context.setGuessList)
			.catch(this.context.setError);
	}
	renderGuesses() {
		const { guessList = [] } = this.context;
		return guessList.map(guess => (
			<Guess key={guess.guess_id} guess={guess} />
		));
	}
	render() {
		const { error } = this.context;
		return (
			<section>
				<h2>Everyone else's guesses:</h2>
				{/* <div className='winnerList'>
					<div className='guessItem container'>
						<img src='https://via.placeholder.com/75' />
						<h3 className='guessName'>Grace Bodur</h3>
						<h3 className='guessNumbers'>05, 08, 16, 18, 26, 09</h3>
						<p className='guessMessage'>If you have a few dollars to spare, donate to this wonderful cause: https://comngood.org/home</p>
					</div>
					<div className='guessItem container'>
						<img src='https://via.placeholder.com/75' />
						<h3 className='guessName'>Malek Haj-Hussein</h3>
						<h3 className='guessNumbers'>06, 09, 16, 19, 29, 55</h3>
						<p className='guessMessage'>Check out my social media pages! https://www.linkedin.com/in/malekadair/</p>
					</div>
					<div className='guessItem container'>
						<img src='https://via.placeholder.com/75' />
						<h3 className='guessName'>Gary</h3>
						<h3 className='guessNumbers'>07, 07, 07, 07, 07, 07</h3>
						<p className='guessMessage'>A'jahn is cool.</p>
					</div>
				</div> */}
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