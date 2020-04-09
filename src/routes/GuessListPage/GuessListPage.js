import React, { Component } from 'react'
import GuessList from '../../components/GuessList/GuessList';
import Nav from '../../components/Nav/Nav';

class GuessListPage extends Component {
	render() {
		return (
			<div>
				<header>
					<Nav />
				</header>
				<GuessList />
			</div>
		)
	}
}

export default GuessListPage