import React, { Component } from 'react'
import WinnersContext from '../../contexts/winnersContext'
import Winner from '../Winner/Winner'

class WinnersList extends Component {
	static contextType = WinnersContext;

	renderWinners() {
		const { winners } = this.context;
		console.log('winners: ', winners)
		return winners.map(winner => (
			<Winner key={winner.week_id} winner={winner} />
		));
	}
	render() {
		const { error } = this.context;
		return (
			<div>
				<main>
					<h2>Most correct numbers</h2>
					<section>
						{error ? (
							<p className="red">There was an error, try again</p>
						) : (
								this.renderWinners()
							)}
					</section>
				</main>
			</div>
		)
	}
}

export default WinnersList