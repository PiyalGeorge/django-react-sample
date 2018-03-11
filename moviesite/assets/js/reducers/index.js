import { combineReducers } from "redux";

import movieList from "./movieListReducers";
import movieDetail from "./MovieDetailReducer.js"

import { reducer as formReducer } from 'redux-form';


const reducer = combineReducers({
    movieList,
    movieDetail,
    form: formReducer,
});

export default reducer;