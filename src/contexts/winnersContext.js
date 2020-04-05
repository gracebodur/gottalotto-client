import React, { Component } from "react";

const WinnersContext = React.createContext({
	winner: {},
	error: null,
	setError: () => { },
	clearError: () => { },
	setWinner: () => { },
	clearWinner: () => { },
	setReviews: () => { },
	addReview: () => { }
});

export default WinnersContext;

export class WinnersProvider extends Component {
	state = {
		winner: {},
		error: null
	};

	setError = error => {
		this.setState({ error });
	};

	clearError = () => {
		this.setState({ error: null });
	};

	setWinner = Winner => {
		this.setState({ Winner });
	};

	clearWinner = () => {
		this.setWinner({});
	};

	render() {
		const value = {
			winner: this.state.winner,
			error: this.state.error,
			setError: this.setError,
			clearError: this.clearError,
			setWinner: this.setWinner,
			clearWinner: this.clearWinner
		};
		return (
			<WinnersContext.Provider value={value}>
				{this.props.children}
			</WinnersContext.Provider>
		);
	}
}
