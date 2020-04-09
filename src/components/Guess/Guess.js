import React, { Component } from 'react'

class Guess extends Component {
	render() {
		const { user_name, guess_1, guess_2, guess_3, guess_4, guess_5, power_ball, message, guess_created_date, has_won } = this.props.guess
		return (
			<section className='guessList'>
				<div className='guessItem container'>
					<img src='https://via.placeholder.com/75' />
					<h3 className='guessName'>{user_name}</h3>
					<h3 className='guessNumbers'>{guess_1}, {guess_2}, {guess_3}, {guess_4}, {guess_5}, PB: {power_ball}</h3>
					<p className='guessMessage'>{message}</p>
				</div>
			</section>
		)
	}
}

export default Guess