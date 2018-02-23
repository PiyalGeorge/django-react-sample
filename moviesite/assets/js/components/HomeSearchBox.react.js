import React from 'react';


class HomeSearchBox extends React.Component {

    render(){

        return(

        <div class="top-search">
	    	<select>
				<option value="united">TV show</option>
				<option value="saab">Others</option>
			</select>
			<input type="text" placeholder="Search for a movie, TV Show or celebrity that you are looking for" />
	    </div>

            );
    }
}

export default HomeSearchBox