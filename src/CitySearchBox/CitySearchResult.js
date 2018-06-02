/**
 * Created by tung.vu on 6/1/2018.
 */
import React, { Component } from 'react';
import map_icon from './map_icon.png';
import temperature from './temperature.svg';
import './CitySearchResult.css';

class CitySearchResult extends Component {
    render() {
        if (this.props.cityName !== undefined) {
            return (
                <div>
                    <div className="row">
                        <div className="col-md-12 col-lg-12" id="city-search-result">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-12" id="city-name">
                            <img src={map_icon} id="city-icon"></img>
                            {this.props.cityName}
                        </div>
                        <div className="col-md-12 col-lg-12" id="city-temp">
                            <img src={temperature} id="city-icon"></img>
                            {this.props.temp}
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div className="row">
                        <div className="col-md-12 col-lg-12" id="city-search-result">
                            <div className="row">
                                <div className="col-md-12 col-lg-12" id="error-msg">
                                    City not found!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default CitySearchResult