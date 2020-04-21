import React, { Component } from 'react'
import GuessList from '../../components/GuessList/GuessList';
import Nav from '../../components/Nav/Nav';
import GuessesApiService from '../../services/guesses-api-service'
import GuessListContext from '../../contexts/guessListContext'
import './GuessListPage.css'

import Scroll from '../../components/Scroll/Scroll'
import Typical from 'react-typical'
import Footer from '../../components/Footer/Footer';

class GuessListPage extends Component {
	static contextType = GuessListContext;

	componentDidMount() {
		this.context.clearError();
		GuessesApiService.getAllGuesses()
			.then(unsortedGuesses => {
				const sortedGuesses = unsortedGuesses.sort((a, b) => b.guess_id - a.guess_id)
				const filteredGuesses = sortedGuesses.filter(guess => guess.week_id >= sortedGuesses[0].week_id)
				this.context.setGuessList(filteredGuesses)
			}
			)
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
						steps={["All guesses for upcoming drawing!", 1000, "", 500]}
						loop={Infinity}
						wrapper="h1"
						className='title'
					/>
					<GuessList />
					<a href='https://www.powerball.com/games/home' className='pb-link' target='_blank'><p>Power Ball Official Website</p></a>
				</Scroll>
				<Footer />
			</div>
		)
	}
}

export default GuessListPage