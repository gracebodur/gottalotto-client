import React, { Component } from 'react'
import GuessesApiService from '../../services/guesses-api-service'
import UserContext from '../../contexts/userContext'
import WeeksApiService from '../../services/weeks-api-service'
import Typical from 'react-typical'
import './SubmitGuessForm.css'

class SubmitGuessForm extends Component {
	static contextType = UserContext
	state = {
		user_id: null,
		week_id: null,
		guess_1: "",
		guess_2: "",
		guess_3: "",
		guess_4: "",
		guess_5: "",
		power_ball: "",
		message: ""
	}
	componentDidMount() {
		WeeksApiService.getCurrentWeek()
			.then(week => {
				this.setState({ week_id: week.week_id })
			})
			.catch()
		this.setState({
			user_id: this.context.user.user_id
		})
	}

	handleSubmit = (ev, data) => {
		ev.preventDefault();
		GuessesApiService.postGuess(data)
			.then(this.props.onSubmitSuccess())
			.catch(this.context.setError);
	};

	handleChange = event => {
		const { name, value, type, checked } = event.target;
		type === "checkbox"
			? this.setState({ [name]: checked })
			: this.setState({ [name]: value });
	};

	render() {
		const { user_id, guess_1, guess_2, guess_3, guess_4, guess_5, power_ball, message, week_id } = this.state;
		return (
			<section className='submit'>
				{/* <Typical
					steps={["Select your 6 numbers", 1000, "", 500]}
					loop={Infinity}
					wrapper="h2"
					className='typical-submit'
				/> */}
				<form className='submitForm'
					onSubmit={event => {
						const data = this.state
						this.handleSubmit(event, data);
					}}>
					<div className='submitText'>
						<h2 className='submitText'>Submit your PowerBall guess for week {week_id}'s upcoming drawing</h2>
					</div>
					<div className="body">
						<div className="pt_Quantity">
							<input
								type="number"
								value={guess_1}
								name='guess_1'
								min='1'
								max='69'
								placeholder='1-69'
								onChange={this.handleChange}
								required
							/>
							<input
								type="number"
								value={guess_2}
								name='guess_2'
								min='1'
								max='69'
								placeholder='1-69'
								onChange={this.handleChange}
								required
							/>
							<input
								type="number"
								value={guess_3}
								name='guess_3'
								min='1'
								max='69'
								placeholder='1-69'
								onChange={this.handleChange}
								required />
							<input
								type="number"
								value={guess_4}
								name='guess_4'
								min='1'
								max='69'
								placeholder='1-69'
								onChange={this.handleChange}
								required />
							<input
								type="number"
								value={guess_5}
								name='guess_5'
								min='1'
								max='69'
								placeholder='1-69'
								onChange={this.handleChange}
								required />
							<input
								type="number"
								value={power_ball}
								name='power_ball'
								min='1'
								max='26'
								placeholder='1-26'
								onChange={this.handleChange}
								required />
						</div>
					</div >
					<div className="soapboxPrompt">
						<p>Use the section below as your "Virtual Soapbox".<br />
							What is the one message you want to share with the world?</p>
					</div>
					<textarea
						type="text"
						value={message}
						name="message"
						maxLength="280"
						rows="6"
						cols="45"
						placeholder='Enter message here'
						onChange={this.handleChange}
						required />
					<button className='submit-button'>Submit Guess!</button>

				</form>

			</section>
		)
	}

}

export default SubmitGuessForm