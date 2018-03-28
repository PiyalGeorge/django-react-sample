import { combineReducers } from "redux";

import movieList from "./movieListReducers";
import movieDetail from "./MovieDetailReducer.js"
import movieDelete from "./DeleteMovieReducers.js"

import { reducer as formReducer } from 'redux-form';


const reducer = combineReducers({
    movieList,
    movieDetail,
    movieDelete,
    form: formReducer,
});

export default reducer;