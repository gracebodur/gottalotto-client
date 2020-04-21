import React, { Component } from 'react'
import Typical from 'react-typical'
import green_ball from '../../img/green_ball.png'
import yellow_ball from '../../img/yellow_ball.png'
import red_ball from '../../img/red_ball.png'
import './Welcome.css'

class Welcome extends Component {
	render() {
		return (
			<main>
				<Typical
					steps={["Welcome!", 1000, "", 500]}
					loop={Infinity}
					wrapper="h1"
					className='welcome'
				/>
				<div className='grid-wrapper'>
					<section className="welcomeSection">
						<div className='box one'>
							<img src={green_ball} alt='green lottery ball' />
							<p className='cardContent'>Do you want to have plain old fun in guessing the winning numbers for each Saturday’s PowerBall drawing?</p>
						</div>
						<div className='box two'>
							<img src={yellow_ball} alt='yellow lottery ball' />
							<p className='cardContent'>or share your motivational message to the world or promote your social media accounts?</p>
						</div>
						<div className='box three'>
							<img src={red_ball} alt='lottery ball' />
							<p className='cardContent'>Play the GottaLotto guessing game!</p>
						</div>
					</section>
				</div>
			</main>
		)
	}
}

export default Welcome



