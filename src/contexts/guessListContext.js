import React, { Component } from "react";

const GuessListContext = React.createContext({
	guessList: [],
	error: null,
	setError: () => { },
	clearError: () => { },
	setGuessList: () => { },
	clearGuessList: () => { },
	setReviews: () => { },
	addReview: () => { }
});

export default GuessListContext;

export class GuessListProvider extends Component {
	state = {
		guessList: [],
		error: null
	};

	setError = error => {
		this.setState({ error });
	};

	clearError = () => {
		this.setState({ error: null });
	};

	setGuessList = guessList => {
		this.setState({ guessList });
	};

	clearGuessList = () => {
		this.setGuessList({});
	};

	render() {
		const value = {
			guessList: this.state.guessList,
			error: this.state.error,
			setError: this.setError,
			clearError: this.clearError,
			setGuessList: this.setGuessList,
			clearGuessList: this.clearGuessList
		};
		return (
			<GuessListContext.Provider value={value}>
				{this.props.children}
			</GuessListContext.Provider>
		);
	}
}
