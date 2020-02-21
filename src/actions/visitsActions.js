import * as request from '../requests/visits'

export function addVisitSuccess(visit) {
	return { type: 'ADD_VISIT', visit };
}
export function loadAllSuccess(visits) {
	return {type:'LOAD_VISITS',visits}
}

export function loadAllForPlace(slug) {
	return (dispatch, getState) => {
		request.getAllForPlaces(slug).then(
			result => {
				dispatch(loadAllSuccess(result))
			}
		)
	}; 
}

export function addVisit(place, observation, reaction) {
	return (dispatch, getState) => {
		let user = getState().user;
		if (!user) return null;

		request.add(user.jwt, place, observation,reaction).then(
			result => {
				dispatch(addVisitSuccess(result))
			}
		)
	};
}