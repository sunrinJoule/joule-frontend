import React, { Component, PropTypes } from 'react';
import './Home.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

export defualt class Info extends Component {
    render() {
        return (
            <div>
                <span>{waitingTitle}<br />입장 대기열</span><br />
                <span>남은 인원 {remainigPeople}명 / 남은 시간 약 {remainingTime}분</span><br />
                <span>대기 시간 {waitingTime}</span>
                <span>{waitingNumber}</span>
            </div>
        )
    }
}
