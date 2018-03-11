export default function reducer(state={
    movieDetail: [],
    fetching: false,
    fetched: false,
    error:null,
}, action) {

    switch (action.type) {
        case "FETCH_MOVIE_DETAIL_SUCCESS" :{
            return {...state, fetching:false, fetched:true, movieDetail: action.payload}
        }
        case "FETCH_MOVIE_DETAIL_FAILED" :{
            return {...state, fetching:false, fetched:false, error: action.payload}
        }
        default : {
            return state;
        }
    }
    return state;
}