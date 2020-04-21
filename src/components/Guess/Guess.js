import React, { Component } from 'react'
import avatar from '../../img/winner_avatar.png'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import './Guess.css'

class Guess extends Component {
	render() {
		const { user_name, guess_1, guess_2, guess_3, guess_4, guess_5, power_ball, message, guess_created_date, has_won } = this.props.guess
		return (
			<section className='guesslist-container'>
				<div style={{ display: 'flex', flex: '1 0 200px', justifyContent: 'space-around', 'flex-wrap': 'wrap' }}>
					<Flippy
						flipOnHover={true}
						flipDirection='vertical'
						style={{ width: '300px', height: '400px' }}
					>
						<FrontSide style={{
							backgroundColor: '#41669d',
							display: 'flex',
							alignItems: 'center',
							flexDirection: 'column'
						}} >
							<img src={avatar} alt='avatar' style={{ maxWidth: '150px', maxHeight: '150px' }} />
							{user_name}

							<span
								className='userName'
								style={{
									fontSize: '17px',
									position: 'absolute',
									bottom: '10px',
									width: '100%',
								}}>
								Guessed Numbers:<br /><br />
								{guess_1}, {guess_2}, {guess_3}, {guess_4}, {guess_5}, PB: {power_ball}<br />
							</span>
						</FrontSide>
						<BackSide
							style={{
								backgroundColor: '#175852',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								flexDirection: 'column'
							}}>
							{message}
							<span className='guesslistNumbers'
								style={{
									fontSize: '17px',
									position: 'absolute',
									bottom: '10px',
									width: '100%'
								}}>
							</span>
						</BackSide>
					</Flippy>
				</div>
			</section>
		)
	}
}

export default Guess


