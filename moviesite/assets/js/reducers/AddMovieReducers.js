import { reducer as formReducer } from 'redux-form';

export default function reducer(state={}, action){

    switch (action.type){
        case "ADD_MOVIE_SUCCESS":{
            return {...state, created:true, action}
        }
        case "ADD_MOVIE_FAILED":{
            return {...state, created:false}
        }
        default :{
            return state;
        }
    }
    return state;
}