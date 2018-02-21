import axios from "axios";


export function fetchMovies(){
	return function(dispatch){
		axios.get("http://127.0.0.1:8000/api/v1/movies/")
		.then((response) => {
			dispatch({type: "FETCH_MOVIES_FULFILLED", payload: response.data})
		})
		.catch((err) => {
			dispatch({type: "FETCH_MOVIES_FAILED", payload: err})
		})
	}
}