/**
 * Created by tung.vu on 6/1/2018.
 */
/**
 * Created by tung.vu on 5/31/2018.
 */
import React, { Component } from 'react';
import './CitySearchBar.css';

class CitySearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
        this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    }

    handleSearchSubmit(e) {
        this.props.onSearchSubmit();
        e.preventDefault();
    }

    handleSearchInputChange(e) {
        this.props.handleSearchInputChange(e.target.value);
    }

    render() {
        return(
                <div className="row" id='city-search-box'>
                    <form onSubmit={this.handleSearchSubmit}>
                        <div id="custom-search-input" className="input-group">
                            <input type="text" className="form-control input-lg" placeholder="City..." onChange={this.handleSearchInputChange}/>
                            <span className="input-group-btn">
                                <button className="btn btn-info btn-lg" type="button">
                                    <i className="glyphicon glyphicon-search"></i>
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
        );
    }
}

export default CitySearchBar