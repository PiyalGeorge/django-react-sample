import React from 'react';
import { reduxForm, Field } from 'redux-form'
import { addMovies } from '../actions/AddMovieActions.js'


class AddMovieForm extends React.Component {

    constructor(props, context){
        super(props, context);
        this.state = {
            formStatus: false,
            validTitle: null,
            submitButtonDisable: true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validataTitle = this.validataTitle.bind(this);
        {/* this.state = {file: '',imagePreviewUrl: ''}; */}
    }

    /*
    handleImageChange(e) {
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
        reader.readAsDataURL(file)
    }
    */

    validataTitle (event) {
        var title = event.target.value;
        var validTitle, submitButtonDisable;
        var styles = {
            color:'red'
        };

        if (!title || title == "") {
            validTitle = <div style={styles}>Required Field</div>;
            submitButtonDisable = true;
        }else{
            validTitle = null;
            submitButtonDisable = false;
        }
        this.setState({validTitle:validTitle, submitButtonDisable:submitButtonDisable});
        return submitButtonDisable;
    }

    handleSubmit(event) {
        console.log("This is submit function");
        this.props.addMovies().then(result => {
            this.setState({formStatus: result});
            setTimeout(function() { this.setState({formStatus: false}); }.bind(this), 7000);
        });
    }

    render() {

        const {addMovies, fields:{title}, handleSubmit} = this.props;

        var disabled = "disabled";
        var submitStatus = {
            color:'red'
        };

    {/*
        let {imagePreviewUrl} = this.state;
        let imagePreview = null;
        if (imagePreviewUrl) {
          imagePreview = (<img src={imagePreviewUrl} />);
        } else {
          imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
    */}

        const adaptFileEventToValue = delegate =>
              e => delegate(e.target.files[0])

        const FileInput = ({
              input: {
                value: omitValue,
                onChange,
                onBlur,
                ...inputProps,
              },
              meta: omitMeta,
              ...props,
            }) =>
              <input
                onChange={adaptFileEventToValue(onChange)}
                onBlur={adaptFileEventToValue(onBlur)}
                type="file"
                {...inputProps}
                {...props}
              />


        return (

            <form onSubmit={handleSubmit(this.handleSubmit)}>
                <div class="row">

                    <div class="col-md-12 form-it">
                        <label>Movie Title</label>
                        <Field name="title" component="input" type="text" onChange={(e)=>this.validataTitle(e)} />

                        { this.state.validTitle }
                    {/*<input type="text" placeholder="Movie Title" name="title" id="title" {...title} />*/}

                        <div class="blog-detail-ct">
                            <div class="comment-form">
                                <div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <label>Movie Synopsis</label>
                                            <Field name="synopsis" component="textarea" placeholder="Movie Synopsis" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Field name="image" component={FileInput} />

                     {/*   <input type="file" name="pic" onChange={(e)=>this.handleImageChange(e)} /> */}

                     {/*   <div className="imgPreview">
                          {imagePreview}
                        </div> */}

                    </div>

                </div>

                <div class="row">
                    <div class="col-md-2">
                        <input class="submit" type="submit" value="save" disabled={ this.state.submitButtonDisable ? disabled : "" } />
                     </div>
                 </div>

                <p></p>
                { this.state.formStatus ? <div style={submitStatus}><h3>Movie added Successfully</h3></div> : null }

            </form>

            )
    }
}

export default reduxForm({ form: 'movieForm', fields: ['title'] })( AddMovieForm )