import React, { Component, PropTypes } from 'react';
import '../style/Button.css';
import '../style/WaitingCard.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

function formatTime(time) {
    // 1000 - 1s
    return ('00' + (time / 60 / 1000 | 0)).slice(0, -2) + ':' + ('00' + ((time / 1000 | 0) % 60)).slice(0, -2);
}
function waitingStatement(state, stateObject) {
    switch(state) {
        case 0:
            return (<span className="WaitingCard-data">남은 인원 {stateObject.remainigPeople} / 남은 시간 약 {stateObject.remainingTime}분<br />
            대기 시간 {formatTime(stateObject.waitingTime)}</span>);
        case 1:
            return (<span className="WaitingCard-data">예정된 대기열입니다</span>);
        case 2:
            return (<span className="WaitingCard-data">만료된 대기열입니다</span>);
        default:
            console.log('err');
    }
}
export default class WaitingCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            waitingTitle: "default title",
            waitingNumber: 0,
            waitingTime: 0,
            waitingState: 0,
            remainigPeople: 0,
            remainingTime: 0
        }
    }
    render() {
        const {
            waitingTitle,
            waitingNumber,
            waitingTime,
            waitingState,
            remainingTime,
            remainigPeople
        } = this.state;
        return (
            <div className="WaitingCard">
                <div className="WaitingCard-title-box">
                    <h2 className="WaitingCard-title">
                        {waitingTitle} asdasda adasdasd awdad awdawdaw awd
                    </h2>
                </div>
                <div className="WaitingCard-number-box">
                    <span className="WaitingCard-number">{waitingNumber}</span>
                </div>
                <br />
                {waitingStatement(waitingState, this.state)}
            </div>
        )
    }
}
