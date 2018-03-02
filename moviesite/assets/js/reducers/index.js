import { combineReducers } from "redux";

import movieList from "./movieListReducers";

import { reducer as formReducer } from 'redux-form';

//export default combineReducers({
//	movieList
//}
//);


const reducer = combineReducers({
    movieList,
    form: formReducer,
});

export default reducer;