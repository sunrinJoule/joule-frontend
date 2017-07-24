import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import '../style/Button.css';
import '../style/Admin.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Lane from './Lane';

function formatTime(time) {
    // 1000 - 1s
    return ('00' + (time / 60 / 1000 | 0)).slice(-2) + ':' + ('00' + ((time / 1000 | 0) % 60)).slice(-2);
}

class Admin extends Component {
    render() {
        const { queue } = this.props;
        return (
            <div className="Admin">
                <h2 className="Admin-title">{queue.name}</h2>
                <span className="Admin-subtitle">평균 처리 시간</span>
                <span className="Admin-data">
                    {formatTime(queue.processTimeAvg)}
                </span><br />
                <span className="Admin-subtitle">대기 인원</span>
                <span className="Admin-data">{queue.queues.length}명</span><br />
                { queue.lanes.map((lane, id) => (
                    <Lane lane={lane} id={id} key={id} />
                ))}
            </div>
        )
    }
}

Admin.propTypes = {
    queue: PropTypes.object,
};

class AdminFinder extends Component {
    render() {
        const { match: { params }, state } = this.props;
        const { queueId } = params;
        const queue = (state.managingQueues || []).find(v => v.id === queueId);
        if (queue == null) {
            return (
                <h1>해당 대기열을 찾을 수 없습니다.</h1>
            );
        }
        return (
            <Admin queue={queue} />
        );
    }
}

AdminFinder.propTypes = {
    match: PropTypes.object,
    state: PropTypes.object,
};

export default connect(v => v)(AdminFinder);
