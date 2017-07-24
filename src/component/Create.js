import React, { Component, PropTypes } from 'react';
import * as queueActions from '../action/queue';
import { connect } from 'react-redux';
import '../style/Button.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class Create extends Component {
    async handleCreate(e) {
        e.preventDefault();
        const { create, history } = this.props;
        // Contact server and stuff
        let queue = await create({
            // Dummy data
            name: '주민센터 대기열',
            otp: false,
            useBells: false,
            lanes: ['민원과', '전과', '몰라'],
            notice: '중요한 공지입니다! 숨 쉬지 마세요!',
            paused: false,
        });
        history.push(`/admin/${queue.id}`);
    }
    render() {
        return (
            <div className="Create">
                <form onSubmit={this.handleCreate.bind(this)}>
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
                </form>
            </div>
        )
    }
}

Create.propTypes = {
    create: PropTypes.func.isRequired,
    history: PropTypes.object,
};

export default connect(
    state => ({ state }),
    { create: queueActions.create },
)(Create);
