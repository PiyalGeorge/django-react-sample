import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class HomeNavBarRight extends React.Component {

    render() {

        return(


                    <div>
                        <ul class="nav navbar-nav flex-child-menu menu-right">

                            <li><Link to='/add'>Add Movie</Link></li>

                            <li class="dropdown first">
                                <a class="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                                pages
                                </a>
                                <ul class="dropdown-menu level1">
                                    <li><a href="landing.html">Landing</a></li>
                                    <li><a href="404.html">404 Page</a></li>
                                    <li class="it-last"><a href="comingsoon.html">Coming soon</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Help</a></li>
                            <li class="loginLink"><a href="#">LOG In</a></li>
                            <li class="btn signupLink"><a href="#">sign up</a></li>
                        </ul>



                    </div>

            );
    }
}

export default HomeNavBarRight