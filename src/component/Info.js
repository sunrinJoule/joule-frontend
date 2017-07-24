import React, { Component, PropTypes } from 'react';
import * as queueActions from '../action/queue';
import { connect } from 'react-redux';
import '../style/Info.css';
import '../style/Button.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

function formatTime(time) {
    // 1000 - 1s
    return ('00' + (time / 60 / 1000 | 0)).slice(-2) + ':' + ('00' + ((time / 1000 | 0) % 60)).slice(-2);
}

class Info extends Component {
    render() {
        const { queue, userId } = this.props;
        return (
            <div className="Info">
                <h2 className="Info-title">{queue.name}</h2>
                <span className="Info-data">남은 인원 {queue.queueBefore}명 / 남은 시간 약 {queue.queueBefore * queue.processTimeAvg}분</span><br />
                <span className="Info-data">대기 시간 {formatTime(Date.now() - queue.userDate)}</span><br />
                <div className="Info-number-box">
                    <span className="Info-number">{queue.userDisplayName}</span><br />
                </div>
                <div className="Info-button-box">
                    <button className="Info-button button-red">취소</button>
                </div>
            </div>
        )
    }
}

Info.propTypes = {
    queue: PropTypes.object,
};

class InfoFinder extends Component {
    handleJoin() {
        const { match: { params }, state } = this.props;
        const { queueId } = params;
        this.props.join(queueId);
    }
    render() {
        const { match: { params }, state } = this.props;
        const { queueId } = params;
        const queue = (state.queues || []).find(v => v.id === queueId);
        if (queue == null) {
            return (
                <div className='Info-join'>
                    <h1>대기열에 가입하세요! 완전 무료!</h1>
                    <button onClick={this.handleJoin.bind(this)}>참가</button>
                </div>
            );
        }
        return (
            <Info queue={queue} />
        );
    }
}

InfoFinder.propTypes = {
    match: PropTypes.object,
    state: PropTypes.object,
};

export default connect(v => v, {
  join: queueActions.join,
})(InfoFinder);
