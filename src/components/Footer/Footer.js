import React from 'react'
import './Footer.css'
// import { Link } from 'react-router-dom'

function Footer() {
	return (
		<footer className='zone footer-content'>
			<h2 className='footer-link footer-right'>Created by:</h2>
			<a className='footer-link grace' href='https://gracebodur.github.io/devgrace-portfolio/' target='_blank' rel='noopener noreferrer'>Grace Bodur</a>
			<a className='footer-link malek' href='https://malekadair.github.io/portfolio/' target='_blank' rel='noopener noreferrer'>Malek Haj-Hussein</a>
		</footer>
	)
}

export default Footer