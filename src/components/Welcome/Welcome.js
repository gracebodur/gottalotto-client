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
					<section>
					<div className='box one'>
						<img src={green_ball} alt='green lottery ball' />
						<p className='cardContent'>Veniam occaecat ullamco ut officia deserunt tempor.</p>
					</div>
					<div className='box two'>
						<img src={yellow_ball} alt='yellow lottery ball'/>
						<p className='cardContent'>Ex eiusmod ad laborum sunt fugiat adipisicing elit duis esse amet.</p>
					</div>
					<div className='box three'>
						<img src={red_ball} alt='lottery ball' />
						<p className='cardContent'>Laboris sit laboris dolore do deserunt fugiat veniam dolore deserunt consectetur nisi esse velit.</p>
					</div>
					</section>
				</div>
			</main>
		)
	}
}

export default Welcome

	
	
	