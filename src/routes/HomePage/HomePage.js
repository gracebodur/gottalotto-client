import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Welcome from '../../components/Welcome/Welcome';
import WinnersList from '../../components/WinnersList/WinnersList'
import Nav from '../../components/Nav/Nav';
import TokenService from '../../services/token-service'

class HomePage extends Component {
	// static contextType = WinnersListContext

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<header>
					<Nav />
				</header>
				<main>
					{/* !isLoggedIn ?  Welcome : "" */}
					{/* Most recent drawing and winner and winner's message */}
					{/* isLoggedIn ? WinnersList : ""  */}
					{/* Ready to submit your guess? Link to /guess */}

					{TokenService.hasAuthToken()
						? <WinnersList />
						: <Welcome />}
					<h3>Ready to submit your own guess?</h3>
					<Link to='/guess'>Guess!</Link>

				</main>
			</div >
		)
	}
}

export default HomePage