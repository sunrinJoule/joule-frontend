import React, { Component, PropTypes } from 'react';
import '../style/Button.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

function formatTime(time) {
    // 1000 - 1s
    return ('00' + (time / 60 / 1000 | 0)).slice(0, -2) + ':' + ('00' + ((time / 1000 | 0) % 60)).slice(0, -2);
}

export default class WaitingCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            waitingTitle: "default title",
            waitingNumber: 0,
            waitingTime: 0,
            remainigPeople: 0,
            remainingTime: 0
        }
    }
    render() {
        const {
            waitingTitle,
            waitingNumber,
            waitingTime,
            remainingTime,
            remainigPeople
        } = this.state;
        return (
            <div className="WaitingCard">
                <div className="WaitingCard-title-box">
                    <h2 className="WaitingCard-title">{waitingTitle}<br />입장 대기열</h2>
                </div>
                <div className="WaitingCard-number-box">
                    <h3 className="WaitingCard-number">{waitingNumber}</h3>
                </div>
                <span className="WaitingCard-data">남은 인원 {remainigPeople} / 남은 시간 약 {remainingTime}분</span><br />
                <span classNmae="WaitingCard-data">대기 시간 {formatTime(waitingTime)}</span>
            </div>
        )
    }
}
