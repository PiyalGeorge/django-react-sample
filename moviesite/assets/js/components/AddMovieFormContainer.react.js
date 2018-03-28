import React from 'react';
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import { addMovies } from '../actions/AddMovieActions.js'
import AddMovieForm from './AddMovieForm.react.js'


class AddMovieFormContainer extends React.Component {

    render() {

    var imageStyle = {top: 1157.33+'px'};
        return(

<div class="page-single">
	<div class="container">
		<div class="row ipad-width">

			<div class="col-md-3 col-sm-12 col-xs-12">
            <div class="movie-img sticky-sb" style={imageStyle}>
					<img src="/static/images/uploads/poster-not.png" alt="" />
            </div>
			</div>

			<div class="col-md-9 col-sm-12 col-xs-12">
				<div class="form-style-1 user-pro" action="">

						<h4>Add Movie Details</h4>

                        <AddMovieForm {...this.props}/>


                    {/*<div class="row">
							<div class="col-md-6 form-it">
								<label>Country</label>
								<select>
								  <option value="united">United States</option>
								  <option value="saab">Others</option>
								</select>
							</div>
							<div class="col-md-6 form-it">
								<label>State</label>
								<select>
								  <option value="united">New York</option>
								  <option value="saab">Others</option>
								</select>
							</div>
						</div>*/}



                {/*<form action="" class="password">
						<h4>02. Change password</h4>
						<div class="row">
							<div class="col-md-6 form-it">
								<label>Old Password</label>
								<input type="text" placeholder="**********" />
							</div>
						</div>
						<div class="row">
							<div class="col-md-6 form-it">
								<label>New Password</label>
								<input type="text" placeholder="***************" />
							</div>
						</div>
						<div class="row">
							<div class="col-md-6 form-it">
								<label>Confirm New Password</label>
								<input type="text" placeholder="*************** " />
							</div>
						</div>
						<div class="row">
							<div class="col-md-2">
								<input class="submit" type="submit" value="change" />
							</div>
						</div>
					</form>*/}

				</div>
			</div>
		</div>
	</div>
</div>

            );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addMovies: () => dispatch(addMovies())
});

export default connect(
    () => ({}),
    mapDispatchToProps,
)(AddMovieFormContainer);