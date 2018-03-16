import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


class MovieList extends React.Component {
    render() {
      return (
         <div>

						<div className="movie-item-style-2 movie-item-style-1">
							<img src={this.props.data.image} alt="" />
							<div className="hvr-inner">
							    <Link to={'/detail/'+this.props.data.id} >Read more <i className="ion-android-arrow-dropright"></i></Link>
	            			</div>
							<div className="mv-item-infor">
								<h6><Link to={'/detail/'+this.props.data.id} >{this.props.data.title}</Link></h6>
								{this.props.data.rating ?<p className="rate"><i className="ion-android-star"></i>
								<span>{this.props.data.rating}</span> /10</p>: null}
							</div>
						</div>
							
         </div>
      );
   }
}

export default MovieList