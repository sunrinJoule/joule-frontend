import React, { Component, PropTypes } from 'react';
import '../style/Button.css';
import '../style/Lane.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

function formatTime(time) {
    // 1000 - 1s
    return ('00' + (time / 60 / 1000 | 0)).slice(0, -2) + ':' + ('00' + ((time / 1000 | 0) % 60)).slice(0, -2);
}

export default class Lane extends Component {
    constructor(props) {
        super(props);
        this.state = {
            laneNumber: 1,
            waitingNumber: 0,
            processTime: 0
        };
    }
    render() {
        const {
            laneNumber,
            waitingNumber,
            processTime
        } = this.state;
        return (
            <div className="Lane">
                <h4 className="Lane-title">{laneNumber}번 창구</h4>
                <span className="Lane-number">{waitingNumber}번</span>
                <span className="Lane-process-time">{formatTime(processTime)}</span>
                <button className="Lane-button button-red">x</button>
            </div>
        )
    }
}
