import React, { Component, PropTypes } from 'react';
import './Home.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <span className="Home-title">Joule</span><br />
                <div className="Home-button-field">
                    <Link to="/create"><button className="Home-button">방생성</button></Link><br />
                    <Link to="/join"><button className="Home-button">들어가기</button></Link>
                </div>
            </div>
        )
    }
}
