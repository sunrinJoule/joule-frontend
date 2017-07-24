import React, { Component, PropTypes } from 'react';
import './Home.css';
import './Button.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

export default class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            waitingTime: "00:00",
            waitingTitle: "default title",
            waitingNumber: 0,
            remainigPeople: 0,
            remainingTime: 0
        };
    }
    render() {
        const {
            waitingTitle,
            waitingTime,
            waitingNumber,
            remainingTime,
            remainigPeople
        } = this.state;
        return (
            <div>
                <span>{waitingTitle}<br />입장 대기열</span><br />
                <span>남은 인원 {remainigPeople}명 / 남은 시간 약 {remainingTime}분</span><br />
                <span>대기 시간 {waitingTime}</span><br />
                <span>{waitingNumber}</span><br />
                <button className="button-red">취소</button>
            </div>
        )
    }
}
