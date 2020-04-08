import React from 'react'
import './Footer.css'
// import { Link } from 'react-router-dom'

function Footer() {
	return (
		<footer className='footerText zone'>
			<h2 className='right'>Created by:</h2>
			<a className='footerLink author' href='https://gracebodur.github.io/devgrace-portfolio/' target='_blank' rel='noopener noreferrer'>Grace Bodur</a>
			<a className='footerLink author' href='https://malekadair.github.io/portfolio/' target='_blank' rel='noopener noreferrer'>Malek Haj-Hussein</a>
		</footer>
	)
}

export default Footer