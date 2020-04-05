import React, { Component } from 'react'

class WinnersList extends Component {
	render() {
		return (
			<div>
				<main>
					<h2>Most correct numbers</h2>
					<section>
						<div className='winnerList'>
							<div>
								<img src='https://via.placeholder.com/50' alt='users avatar' />
							</div>
							<h3 className='winnerName'>Grace Bodur</h3>
							<h3 className='winnerGuess' s>05, 08, 16, 18, 26, 109</h3>
							<p className='winnerMessage'>If you have a few dollars to spare, donate to this wonderful cause: https://comngood.org/home</p>
						</div>
						<div className='winnerList'>
							<div>
								<img src='https://via.placeholder.com/50' alt='users avatar' />
							</div>
							<h3 className='winnerName'>Malek Haj-Hussein</h3>
							<h3 className='winnerGuess'>06, 09, 16, 19, 29, 55</h3>
							<p className='winnerMessage'>Check out my social media pages! https://www.linkedin.com/in/malekadair/</p>
						</div>
						<div className='winnerList'>
							<div>
								<img src='https://via.placeholder.com/50' alt='users avatar' />
							</div>
							<h3 className='winnerName'>Gary</h3>
							<h3 className='winnerGuess'>07, 07, 07, 07, 07, 07</h3>
							<p className='winnerMessage'>A'jahn is cool.</p>
						</div>
					</section>
				</main>
			</div>
		)
	}
}

export default WinnersList