/**
 * Created by tung.vu on 5/31/2018.
 */
import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, NavItem, MenuItem} from 'react-bootstrap';
import './Header.css';
import weather from './weather.svg';

class Header extends Component {
    render() {
        return(
                <nav className="navbar">
                    <Navbar.Brand>
                        <div className='header-item'>
                            <button className="btn" type="button" id="burger-menu" data-toggle="collapse" data-target="#sidebar">
                                <i className="glyphicon glyphicon-menu-hamburger"></i>
                            </button>
                        </div>
                        <div id='navbar-logo' className='header-item'>
                            <img src={weather}></img>
                        </div>
                        <div className='header-item' id='brand-name'>
                            <a href="#">Open weather</a>
                        </div>
                    </Navbar.Brand>
                </nav>
        );
    }
}

export default Header