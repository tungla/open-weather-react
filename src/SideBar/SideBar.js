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
            <div class="sidenav collapse in width" id="sidebar">
                <div class='sidenav-items'>
                    <div className="hvr-back-pulse">
                        <a href="#">Current weather</a>
                    </div>
                    <div className="hvr-back-pulse">
                        <a href="#">Current weather</a>
                    </div>
                    <div className="hvr-back-pulse">
                        <a href="#">Current weather</a>
                    </div>
                    <div className="hvr-back-pulse">
                        <a href="#">Weather</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default SideBar