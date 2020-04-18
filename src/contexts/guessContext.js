import React, { Component } from "react";

const GuessContext = React.createContext({
	guess: {},
	error: null,
	setError: () => { },
	clearError: () => { },
	setGuess: () => { },
	clearGuess: () => { },
	setReviews: () => { },
	addReview: () => { }
});

export default GuessContext;

export class GuessProvider extends Component {
	state = {
		guess: {},
		error: null
	};

	setError = error => {
		this.setState({ error });
	};

	clearError = () => {
		this.setState({ error: null });
	};

	setGuess = guess => {
		this.setState({ guess });
	};

	clearGuess = () => {
		this.setGuess({});
	};

	render() {
		const value = {
			guess: this.state.guess,
			error: this.state.error,
			setError: this.setError,
			clearError: this.clearError,
			setGuess: this.setGuess,
			clearGuess: this.clearGuess
		};
		return (
			<GuessContext.Provider value={value}>
				{this.props.children}
			</GuessContext.Provider>
		);
	}
}

