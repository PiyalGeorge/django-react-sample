import React from 'react';
import { connect } from 'react-redux'

import { fetchMovies } from '../actions/movieListActions'

import MovieList from './MovieListing.jsx'


@connect((store) => {
	return{
		movieList: store.movieList.movieList
	};
})

class List extends React.Component {

    constructor(){
        super();
        this.state = {
            data:
                []
        }
    }

    componentWillMount(){
    	this.props.dispatch(fetchMovies())
    }

   render() {

   const { movieList } = this.props;

      return (
         <div>

<div className="page-single">
	<div className="container">
		<div className="row">
			<div className="col-md-12 col-sm-12 col-xs-12">
				<div className="topbar-filter fw">
					<p>Found <span>1,608 movies</span> in total</p>
					<label>Sort by:</label>
					<select>
						<option value="popularity">Popularity Descending</option>
						<option value="popularity">Popularity Ascending</option>
						<option value="rating">Rating Descending</option>
						<option value="rating">Rating Ascending</option>
						<option value="date">Release date Descending</option>
						<option value="date">Release date Ascending</option>
					</select>
					<a href="movielist.html" className="list"><i className="ion-ios-list-outline "></i></a>
					<a  href="moviegridfw.html" className="grid"><i className="ion-grid active"></i></a>
				</div>

				<div className="flex-wrap-movielist mv-grid-fw">
                {movieList.map((movies, i) => <MovieList key={i} data={movies} />)}
                </div>

				<div className="topbar-filter">
					<label>Movies per page:</label>
					<select>
						<option value="range">20 Movies</option>
						<option value="saab">10 Movies</option>
					</select>

					<div className="pagination2">
						<span>Page 1 of 2:</span>
						<a className="active" href="#">1</a>
						<a href="#">2</a>
						<a href="#">3</a>
						<a href="#">...</a>
						<a href="#">78</a>
						<a href="#">79</a>
						<a href="#"><i className="ion-arrow-right-b"></i></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>


         </div>
      );
   }
}

export default List
