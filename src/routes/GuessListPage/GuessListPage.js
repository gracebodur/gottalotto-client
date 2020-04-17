import React, { Component } from 'react'
import GuessList from '../../components/GuessList/GuessList';
import Nav from '../../components/Nav/Nav';
import GuessesApiService from '../../services/guesses-api-service'
import GuessListContext from '../../contexts/guessListContext'
import './GuessListPage.css'

import Scroll from '../../components/Scroll/Scroll'
import Typical from 'react-typical'

class GuessListPage extends Component {
	static contextType = GuessListContext;

	componentDidMount() {
		this.context.clearError();
		GuessesApiService.getAllGuesses()
			.then(this.context.setGuessList)
			.catch(this.context.setError);
	}

	render() {
		return (
			<div>
				<header>
					<Nav />
				</header>
				<Scroll>
				<Typical
					steps={["Everyone else's guesses!", 1000, "", 500]}
					loop={Infinity}
					wrapper="h1"
					className='title'
			  	/>
					<GuessList />
				<a href='https://www.powerball.com/games/home' className='pb-link'><p>Power Ball Official Website</p></a>
				</Scroll>
			</div>
		)
	}
}

export default GuessListPage