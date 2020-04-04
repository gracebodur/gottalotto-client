import React, { Component } from 'react'

class GuessList extends Component {
	render() {
		return (
			<section>
				<h2>Everyone else's guesses:</h2>
				<div className='winnerList'>
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
				</div>
				<a href='https://www.powerball.com/games/home'><p>Power Ball Official Website</p></a>
			</section>
		)
	}
}

export default GuessList