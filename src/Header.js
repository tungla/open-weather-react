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
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <div id='navbar-logo' className='header-item'>
                            <img src={weather}></img>
                        </div>
                        <div className='header-item' id='brand-name'> 
                            <a href="#home">Open weather</a>
                        </div>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        );
    }
}

export default Header