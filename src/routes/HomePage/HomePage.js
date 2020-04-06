import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Welcome from '../../components/Welcome/Welcome';

class HomePage extends Component {
	// static contextType = WinnersListContext

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<main>
					{/* !isLoggedIn ?  Welcome : "" */}
					{/* Most recent drawing and winner and winner's message */}
					{/* isLoggedIn ? WinnersList : ""  */}
					{/* Ready to submit your guess? Link to /guess */}
					<Welcome />
					<h3>Ready to submit your own guess?</h3>
					<Link to='/guess'>Guess!</Link>
				</main>
			</div>
		)
	}
}

export default HomePage