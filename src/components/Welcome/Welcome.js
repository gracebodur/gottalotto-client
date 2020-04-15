import React, { Component } from 'react'
import cover from '../../img/cover-2.png'
import green_ball from '../../img/green_ball.png'
import yellow_ball from '../../img/yellow_ball.png'
import red_ball from '../../img/red_ball.png'
import './Welcome.css'

class Welcome extends Component {
	render() {
		return (
			<main>
			<div className='container zone'><img class='cover' src={cover} alt='lottery-balls'/></div>
				<div className='zone grid-wrapper'>
					<div className='box zone'>
						<img src={green_ball} alt='green lottery ball' />
						<p className='cardContent'>Veniam occaecat ullamco ut officia deserunt tempor.</p>
					</div>
					<div className='box zone'>
						<img src={yellow_ball} alt='yellow lottery ball'/>
						<p className='cardContent'>Ex eiusmod ad laborum sunt fugiat adipisicing elit duis esse amet.</p>
					</div>
					<div className='box zone'>
						<img src={red_ball} alt='lottery ball' />
						<p className='cardContent'>Laboris sit laboris dolore do deserunt fugiat veniam dolore deserunt consectetur nisi esse velit.</p>
					</div>
				</div>
			</main>
		)
	}
}

export default Welcome

	
	
	