import React, { Component } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import trophy from '../../img/trophy.png'
import './Winner.css'

class Winner extends Component {
	render() {
		const { user_name, guess_1, guess_2, guess_3, guess_4, guess_5, power_ball, message } = this.props.winner
		return (
			<section className='Winner'>
				<div style={{ display: 'flex', flex: '1 0 200px', justifyContent: 'space-around', 'flexWrap': 'wrap' }}>
					<Flippy
						flipOnHover={true}
						flipDirection='vertical'
						style={{ width: '300px', height: '400px' }}
					>
						<FrontSide style={{
							backgroundColor: '#41669d',
							display: 'flex',
							alignItems: 'center',
							flexDirection: 'column',
						}} >
							<img src={trophy} alt='avatar' style={{ maxWidth: '200px', maxHeight: '200px' }} />
							{user_name}
							<span
								className='winnerName'
								style={{
									fontSize: '17px',
									position: 'absolute',
									bottom: '25px',
									width: '100%',
									padding: '25px'
								}}>
								Guessed Numbers:<br /><br />
								{guess_1}, {guess_2}, {guess_3}, {guess_4}, {guess_5}, PB: {power_ball}<br />
							</span>
						</FrontSide>
						<BackSide style={{
							backgroundColor: '#175852',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							flexDirection: 'column'
						}}>
							{message}
							<span className='winnerNumbers'
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
			</section >
		)
	}
}

export default Winner
