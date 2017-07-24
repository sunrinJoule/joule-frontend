import React, { Component, PropTypes } from 'react';
import './Button.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import WaitingCard from './WaitingCard';

export default class WaitingList extends Component {
    render() {
        return (
            <div>
                <h2>대기열 목록</h2>
                <WaitingCard />
                <WaitingCard />
            </div>
        )
    }
}
