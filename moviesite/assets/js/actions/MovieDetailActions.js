import axios from "axios";


export function fetchMovieDetails(movieId) {
    return function(dispatch){
        axios.get("http://127.0.0.1:8000/api/v1/movies/"+movieId+"/")
        .then((response) => {
            dispatch({type: "FETCH_MOVIE_DETAIL_SUCCESS", payload: response.data})
        })
        .catch((err) => {
            dispatch({type: "FETCH_MOVIE_DETAIL_FAILED", payload:err})
        })
    }
}