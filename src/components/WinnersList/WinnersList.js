import React, { Component } from 'react'
import Typical from 'react-typical'
import WinnersContext from '../../contexts/winnersContext'
import Winner from '../Winner/Winner'

class WinnersList extends Component {
	static contextType = WinnersContext;

	renderWinners() {
		const { winners } = this.context;
		winners.reverse()
		return winners.map(winner => (
			<Winner key={winner.week_id} winner={winner} />
		));
	}
	render() {
		const { error } = this.context;
		return (
			<div>
				<main>
					<Typical
						steps={["Most Recent Winners", 1000, "", 500]}
						loop={Infinity}
						wrapper="h1"
					/>
					<section className="winnerList">
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