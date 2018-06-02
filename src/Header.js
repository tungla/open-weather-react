/**
 * Created by tung.vu on 5/31/2018.
 */
import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, NavItem, MenuItem} from 'react-bootstrap';
import './Header.css';

class Header extends Component {
    render() {
        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a id = 'brand_name' href="#home">Open weather</a>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        );
    }
}

export default Header