// from: https://docs.djangoproject.com/en/dev/ref/csrf/#ajax
function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie != '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) == (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}


export function addMovies(){

    return (dispatch, getState) =>{

        {/*
        function addMovieData(movieFormData) {

            const movieFormDataSend = movieFormData;

            return fetch("http://127.0.0.1:8000/api/v1/movies/", {
                method: 'post',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'X-CSRFToken': getCookie('csrftoken')
                },
                credentials: 'same-origin',
                body: JSON.stringify(movieFormDataSend)
            }).then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        console.log("Movie added Successfully");
                        dispatch({
                            type: "ADD_MOVIE_SUCCESS",
                            movieForm,
                        });
                    }else{
                        console.log(response.status);
                        console.log("Movie adding Failure");
                    }
                })
                .catch((err) => console.log(err));
        }

        const form = getState().form;
        const movieForm = {
            form,
        }

        const movieFormData = movieForm.form.movieForm.values;

        addMovieData(movieFormData);
        console.log("add function callllllllllllllllllllll");

    ----------------------------------------------------------------------

        */}


        const form = getState().form;
        const movieForm = {
            form,
        }

        const movieFormDataSend = movieForm.form.movieForm.values;

        fetch("http://127.0.0.1:8000/api/v1/movies/", {
                method: 'post',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'X-CSRFToken': getCookie('csrftoken')
                },
                credentials: 'same-origin',
                body: JSON.stringify(movieFormDataSend)
            }).then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        console.log("Movie added Successfully");
                        dispatch({
                            type: "ADD_MOVIE_SUCCESS",
                            movieForm,
                        });
                    }else{
                        console.log(response.status);
                        console.log("Movie adding Failure");
                    }
                })
                .catch((err) => console.log(err));

    }

}