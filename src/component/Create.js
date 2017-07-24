import React, { Component, PropTypes } from 'react';
import '../style/Button.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

export default class Create extends Component {
    render() {
        return (
            <div className="Create">
                <h2 className="Create-title">대기열 생성</h2>
                <input type="text" /><br />
                <span>생성할 대기열의 이름을 입력해주세요</span><br />
                <input type="text" /><br />
                <span>생성할 창구 수를 입력해주세요</span><br />
                <span>OTP를 사용합니다<input type="checkbox" /></span><br />
                <span>호출<input type="checkbox" /></span><br />
                <span>대기열<input type="checkbox" /></span><br />
                <button className="button-green">생성</button>
                <button className="button-red">취소</button>
            </div>
        )
    }
}
