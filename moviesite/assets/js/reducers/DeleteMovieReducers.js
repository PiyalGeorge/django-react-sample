export default function reducer(state={
	deleted: false,
	error: null,
}, action) {

	switch (action.type) {
		case "DELETE_MOVIES_SUCCESS":{
			return {...state, deleted:true}
		}
		case "DELETE_MOVIES_FAILED":{
			return {...state, deleted:false, error: action.payload}
		}
		default : {
			return state;
		}
	}
	return state;
}