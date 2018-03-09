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

        const form = getState().form;
        const movieForm = {
            form,
        }

        const movieValues = movieForm.form.movieForm.values;

        var formData = new FormData();
        formData.append("title", movieValues.title);
        if (movieValues.image) {
        formData.append("image", movieValues.image);
        }

        const status = fetch("http://127.0.0.1:8000/api/v1/movies/", {
                method: 'post',
                headers: {
//                  'Accept': 'application/json',
//                  'Content-Type': 'application/json',
                  'X-CSRFToken': getCookie('csrftoken')
                },
                credentials: 'same-origin',
//                body: JSON.stringify(movieValues)
                body: formData
            }).then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        console.log("Movie added Successfully");
                        dispatch({
                            type: "ADD_MOVIE_SUCCESS",
                            movieForm,
                        });
                        return true;
                    }else{
                        console.log(response.status);
                        console.log("Movie adding Failure");
                        return false;
                    }
                })
                .catch((err) => {
                    console.log(err);
                    return false;
                });

        return status;
    }

}