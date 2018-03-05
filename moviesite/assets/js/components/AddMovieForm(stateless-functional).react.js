//This is same as AddMovieForm.react.js, but this is done as stateless functional component. Now we are not using this.
//Because in stateless functional component, we cannot use life cycle components. And i feel more easy to use stateful react components.


import React from 'react';
import { reduxForm, Field } from 'redux-form'
import { addMovies } from '../actions/AddMovieActions.js'


const AddMovieForm = props => {

  const {addMovies, fields:{title}, handleSubmit} = props;

  return (
    <form onSubmit={handleSubmit(addMovies)}>
        <div class="row">

            <div class="col-md-12 form-it">
                <label>Movie Title</label>
                <Field name="title" component="input" type="text" />
            {/*<input type="text" placeholder="Movie Title" name="title" id="title" {...title} />*/}

                <div class="blog-detail-ct">
                    <div class="comment-form">
                        <div>
                            <div class="row">
                                <div class="col-md-12">
                                    <label>Movie Synopsis</label>
                                    <textarea name="synopsis" id="synopsis" placeholder="Movie Synopsis"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="row">
            <div class="col-md-2">
                <input class="submit" type="submit" value="save" />
             </div>
         </div>
    </form>
  )
}


export default reduxForm({ form: 'movieForm', fields: ['title'] })( AddMovieForm )