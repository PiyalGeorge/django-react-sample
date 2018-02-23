import React from 'react';

import HomeNavBarLeft from './HomeNavBarLeft.react.js'
import HomeNavBarRight from './HomeNavBarRight.react.js'


class HomeNavBar extends React.Component {

    render() {

        return(

                <div class="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">

                    {/* <!--- Navigation bars in Left side ---> */}
					<HomeNavBarLeft />

                    {/* <!--- Navigation bars in Right side ---> */}
					<HomeNavBarRight />

				</div>


            );
    }
}

export default HomeNavBar