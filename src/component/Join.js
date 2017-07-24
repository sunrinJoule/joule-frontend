import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import '../style/Button.css';
import '../style/Join.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import WaitingCard from './WaitingCard';

export default class Join extends Component {
    render() {
        return (
            <div className="Join">
                <div className="Join-input-box">
                    <h2 className="Join-title">대기열 입장</h2>
                    <input className="Join-input" name="id" type="text" /><br />
                    <span className="Join-url">https://jou.le/.....</span><br />
                    <button className="Join-button button-green">입장</button>
                    <button className="Join-button button-red">취소</button>
                </div>
                <div className="Join-card-box">
                    <WaitingCard className="Join-card"/>
                </div>
            </div>
        )
    }
}

