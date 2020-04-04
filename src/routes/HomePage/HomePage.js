import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HomePage extends Component {
	render() {
		return (
			<div>
				<main>
					<h2>Welcome!</h2>
					<section className='welcome'>
						<div className='left container'>
							<img src='https://via.placeholder.com/150' />
							<p className='cardContent'>Veniam occaecat ullamco ut officia deserunt tempor.</p>
						</div>
						<div className='middle container'>
							<img src='https://via.placeholder.com/150' />
							<p className='cardContent'>Ex eiusmod ad laborum sunt fugiat adipisicing elit duis esse amet.</p>
						</div>
						<div className='right container'>
							<img src='https://via.placeholder.com/150' />
							<p className='cardContent'>Laboris sit laboris dolore do deserunt fugiat veniam dolore deserunt consectetur nisi esse velit.</p>
						</div>
					</section>
					<h3>Ready to submit your own guess?</h3>
					<Link to='/guess'>Guess!</Link>
				</main>
			</div>
		)
	}
}

export default HomePage