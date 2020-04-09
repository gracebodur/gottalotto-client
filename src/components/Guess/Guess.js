import React, { Component } from 'react'

class Guess extends Component {
	render() {
		const { user_name } = this.props.guess
		return (
			<section className='guessList'>
				<div className='guessItem container'>
					<img src='https://via.placeholder.com/75' />
					<h3 className='guessName'>{user_name}</h3>
					<h3 className='guessNumbers'>05, 08, 16, 18, 26, 09</h3>
					<p className='guessMessage'>If you have a few dollars to spare, donate to this wonderful cause: https://comngood.org/home</p>
				</div>
				<a href='https://www.powerball.com/games/home'><p>Power Ball Official Website</p></a>
			</section>
		)
	}
}

export default Guess