import React, { Component, PropTypes } from 'react';
import '../style/Info.css';
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

export default class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            waitingTime: 0,
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
            <div className="Info">
                <h2 className="Info-title">{waitingTitle}<br />입장 대기열</h2>
                <span className="Info-data">남은 인원 {remainigPeople}명 / 남은 시간 약 {remainingTime}분</span><br />
                <span className="Info-data">대기 시간 {formatTime(waitingTime)}</span><br />
                <div className="Info-number-box">
                    <span className="Info-number">{waitingNumber}</span><br />
                </div>
                <div className="Info-button-box">
                    <button className="Info-button button-red">취소</button>
                </div>
            </div>
        )
    }
}
