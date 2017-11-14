import React from 'react';
import Homepage from './Homepage';
import Logout from './Logout';
import { BrowserRouter, Route, Link } from 'react-router-dom'


class NavBar extends React.Component {


    render() {
        return (
            <div className="nav">
                <a className="logo-homepage" href='/'>Traveler<i className="fa fa-plane" aria-hidden="true"></i></a>
                <a className="homepage" href='/'>Homepage |</a>
                <a className="logout" href='/logout'>Logout</a>
            </div>
        );
    }
}


export default NavBar;