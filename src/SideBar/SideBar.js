import { slide as Menu } from 'react-burger-menu';
import React, { Component } from 'react';
import './SideBar.css';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import CitySearchBox from '../CitySearchBox/CitySearchBox';

class SideBar extends React.Component {
    showSettings(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div class="sidenav">
                <div class='sidenav-items'>
                    <a href="#">Current weather</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        );
    }
}

export default SideBar