import React, { Component, PropTypes } from 'react';
import '../style/Button.css';
import '../style/List.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import WaitingCard from './WaitingCard';

export default class WaitingList extends Component {
    render() {
        return (
            <div className="WaitingList">
                <h2 className="WaitingList-title">대기열 목록</h2>
                <div className="WaitingList-box">
                    <WaitingCard />
                    <WaitingCard />
                </div>
            </div>
        )
    }
}
