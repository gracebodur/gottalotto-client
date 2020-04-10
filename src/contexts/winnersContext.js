import React, { Component } from "react";

const WinnersContext = React.createContext({
	winners: [],
	error: null,
	setError: () => { },
	clearError: () => { },
	setWinners: () => { },
	clearWinners: () => { },
	setReviews: () => { },
	addReview: () => { }
});

export default WinnersContext;

export class WinnersProvider extends Component {
	state = {
		winners: [],
		error: null
	};

	setError = error => {
		this.setState({ error });
	};

	clearError = () => {
		this.setState({ error: null });
	};

	setWinners = winners => {
		this.setState({ winners });
	};

	clearWinners = () => {
		this.setWinners({});
	};

	render() {
		const value = {
			winners: this.state.winners,
			error: this.state.error,
			setError: this.setError,
			clearError: this.clearError,
			setWinners: this.setWinners,
			clearWinners: this.clearWinners
		};
		return (
			<WinnersContext.Provider value={value}>
				{this.props.children}
			</WinnersContext.Provider>
		);
	}
}
