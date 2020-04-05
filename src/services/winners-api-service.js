// import config from '../config'
// import TokenService from '../services/token-service'

const WinnersApiService = {
	getAllWinners() {
		return fetch(`${config.API_ENDPOINT}/winners`, {
			headers: {
				'authorization': `bearer ${TokenService.getAuthToken()}`,
			},
		})
			.then(res =>
				(!res.ok)
					? res.json().then(e => Promise.reject(e))
					: res.json()
			)
	},
	getById(winner_id) {
		return fetch(`${config.API_ENDPOINT}/winners/${winner_id}`, {
			headers: {
				'authorization': `bearer ${TokenService.getAuthToken()}`,
			},
		})
			.then(res =>
				(!res.ok)
					? res.json().then(e => Promise.reject(e))
					: res.json()
			)
	},
	getWinnersMessage(winner_id) {
		return fetch(`${config.API_ENDPOINT}/winners/${project_id}/messages`, {
			headers: {
				'authorization': `bearer ${TokenService.getAuthToken()}`,
			},
		})
			.then(res =>
				(!res.ok)
					? res.json().then(e => Promise.reject(e))
					: res.json()
			)
	}
}

export default WinnersApiService