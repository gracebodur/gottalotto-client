import React, { Component } from "react";

const WeeksContext = React.createContext({
	week: {},
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
			<WeeksContext.Provider value={value}>
				{this.props.children}
			</WeeksContext.Provider>
		);
	}
}
