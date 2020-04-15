import React, { Component } from 'react'
import avatar from '../../img/avatar.svg'

class Winner extends Component {
	render() {
		const { user_name, guess_1, guess_2, guess_3, guess_4, guess_5, power_ball, message, guess_created_date, has_won } = this.props.winner
		return (
			<section className='winnerList'>
				<div className='winnerItem container'>
					<img src={avatar} alt='avatar' />
					<h3 className='winnerName'>{user_name}</h3>
					<h3 className='winnerNumbers'>{guess_1}, {guess_2}, {guess_3}, {guess_4}, {guess_5}, PB: {power_ball}</h3>
					<p className='winnerMessage'>{message}</p>
				</div>
			</section>
		)
	}
}

export default Winner