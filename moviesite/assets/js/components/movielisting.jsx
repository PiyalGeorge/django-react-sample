import React from 'react';


class MovieList extends React.Component {
    render() {
      return (
         <div>

             	
						<div className="movie-item-style-2 movie-item-style-1">
							<img src={this.props.data.image} alt="" />
							<div className="hvr-inner">
	            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
	            			</div>
							<div className="mv-item-infor">
								<h6><a href="#">{this.props.data.title}</a></h6>
								<p className="rate"><i className="ion-android-star"></i>
								<span>{this.props.data.rating}</span> /10</p>
							</div>
						</div>
							
				


         </div>
      );
   }
}

export default MovieList