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
                <h2 className="title">대기열 입장</h2>
                <input className="input" type="text" /><br />
                <span className="url">https://jou.le/.....</span><br />
                <button className="button-green">입장</button>
                <button className="button-red">취소</button>
                <WaitingCard />
            </div>
        )
    }
}
