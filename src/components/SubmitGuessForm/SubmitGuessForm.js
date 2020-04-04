import React, { Component } from 'react'

class SubmitGuessForm extends Component {
	render() {
		return (
			<div>
				<form>
					<legend>Select your 6 numbers</legend>

					<input type="number" name='firstNum' min='1' max='69' required />
					<input type="number" name='secondNum' min='1' max='69' required />
					<input type="number" name='thirdNum' min='1' max='69' required />
					<input type="number" name='fourthNum' min='1' max='69' required />
					<input type="number" name='fifthNum' min='1' max='69' required />
					<input type="number" name='sixthNum' min='1' max='26' required />
					<textarea maxlength="280" placeholder='Enter message here' required></textarea>
					<button>Submit Guess!</button>
				</form>
			</div>
		)
	}

}

export default SubmitGuessForm