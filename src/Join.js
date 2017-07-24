import React, { Component, PropTypes } from 'react';
import './Button.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import WaitingCard from './WaitingCard';

export default class Join extends Component {
    render() {
        return (
            <div>
                <h2>대기열 입장</h2>
                <input type="text" /><br />
                <span>https://jou.le/.....</span><br />
                <button className="button-green">입장</button>
                <button className="button-red">취소</button>
                <WaitingCard />
            </div>
        )
    }
}