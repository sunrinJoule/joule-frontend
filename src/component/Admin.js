import React, { Component, PropTypes } from 'react';
import '../style/Button.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Lane from './Lane';

function formatTime(time) {
    // 1000 - 1s
    return ('00' + (time / 60 / 1000 | 0)).slice(0, -2) + ':' + ('00' + ((time / 1000 | 0) % 60)).slice(0, -2);
}

export default class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            processTime: 0,
            waitingPeople: 0
        };
    }
    render() {
        const {
            processTime,
            waitingPeople
        } = this.state;
        return (
            <div className="Admin">
                <h2 className="title">관리 모드</h2>
                <span className="subtitle">평균 처리 시간</span>
                <span className="data">{formatTime(processTime)}</span><br />
                <span className="subtitle">대기 인원</span>
                <span className="data">{waitingPeople}명</span><br />
                <Lane />
                <Lane />
            </div>
        )
    }
}
