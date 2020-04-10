import React, { Component } from 'react'
import GuessesApiService from '../../services/guesses-api-service'
import UserContext from '../../contexts/userContext'

class SubmitGuessForm extends Component {
	static contextType = UserContext

	state = {
		guess_1: "",
		guess_2: "",
		guess_3: "",
		guess_4: "",
		guess_5: "",
		power_ball: "",
		message: ""
	}

	handleSubmit = (ev, data) => {
		ev.preventDefault();
		GuessesApiService.postGuess(data)
			.then()
			.catch(this.context.setError);
		const { location, history } = this.props;
		const destination = (location.state || {}).from || "/";
		history.push(destination);
	};

	handleChange = event => {
		const { name, value, type, checked } = event.target;
		type === "checkbox"
			? this.setState({ [name]: checked })
			: this.setState({ [name]: value });
	};

	render() {
		const { guess_1, guess_2, guess_3, guess_4, guess_5, power_ball, message } = this.state;
		console.log('context', this.context)

		return (
			<div>
				<form onSubmit={event => {
					const data = this.state;
					this.handleSubmit(event, data);
				}}>
					<legend>Select your 6 numbers</legend>
					<p>{guess_1}, {guess_2}, {guess_3}, {guess_4}, {guess_5}, {power_ball}</p>
					<p>{message}</p>
					<input type="number" value={guess_1} name='guess_1' min='1' max='69' onChange={this.handleChange} required />
					<input type="number" value={guess_2} name='guess_2' min='1' max='69' onChange={this.handleChange} required />
					<input type="number" value={guess_3} name='guess_3' min='1' max='69' onChange={this.handleChange} required />
					<input type="number" value={guess_4} name='guess_4' min='1' max='69' onChange={this.handleChange} required />
					<input type="number" value={guess_5} name='guess_5' min='1' max='69' onChange={this.handleChange} required />
					<input type="number" value={power_ball} name='power_ball' min='1' max='26' onChange={this.handleChange} required />
					<textarea
						type="text"
						value={message}
						name="message"
						maxLength="280"
						placeholder='Enter message here'
						onChange={this.handleChange}
						required />
					<button>Submit Guess!</button>
				</form>
			</div>
		)
	}

}

export default SubmitGuessForm