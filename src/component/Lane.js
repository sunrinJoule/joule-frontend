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
    return ('00' + (time / 60 / 1000 | 0)).slice(-2) + ':' + ('00' + ((time / 1000 | 0) % 60)).slice(-2);
}

export default class Lane extends Component {
    render() {
        const { id, lane } = this.props;
        const { name, user, date } = lane;
        return (
            <div className="Lane">
              <h4 className="Lane-title">{ name }</h4>
              { user == null ? (
                <div className="Lane-emptry">
                  <button className="button-green">다음</button>
                </div>
              ) : (
                <div className="Lane-filled">
                  <span className="Lane-number">{user}번</span>
                  <span className="Lane-process-time">{formatTime(Date.now() - date)}</span>
                  <button className="button-green">o</button>
                  <button className="button-red">x</button>
                </div>
              ) }
            </div>
        )
    }
}

Lane.propTypes = {
  id: PropTypes.number,
  lane: PropTypes.object,
};
