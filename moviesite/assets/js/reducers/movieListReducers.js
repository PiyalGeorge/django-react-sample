export default function reducer(state={
	movieList: [],
	fetching: false,
	fetched: false,
	error: null,
}, action) {

	switch (action.type) {
		case "FETCH_MOVIES_FULFILLED":{
			return {...state, fetching:false, fetched:true, movieList: action.payload}
		}
		case "FETCH_MOVIES_FAILED":{
			return {...state, fetching:false, error: action.payload}
		}
		default : {
			return state;
		}
	}
	return state;
}