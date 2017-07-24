import React, { Component, PropTypes } from 'react';
import '../style/Button.css';
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
                <h2 className="Join-title">대기열 입장</h2>
                <input className="Join-input" type="text" /><br />
                <span className="Join-url">https://jou.le/.....</span><br />
                <button className="Join-button-green">입장</button>
                <button className="button-red">취소</button>
                <WaitingCard />
            </div>
        )
    }
}
