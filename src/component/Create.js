import React, { Component, PropTypes } from 'react';
import * as queueActions from '../action/queue';
import { connect } from 'react-redux';
import '../style/Button.css';
import '../style/Create.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lanesCount: 1,
            otp: true,
            useBells: false,
        };
    }
    handleChange(name, e) {
        this.setState({
            [name]: e.target.type === 'checkbox' ? e.target.checked :
                e.target.value,
        });
    }
    async handleCreate(e) {
        e.preventDefault();
        const { create, history } = this.props;
        // Contact server and stuff
        let lanes = [];
        for (let i = 0; i < this.state.lanesCount; ++i) {
            lanes.push(`${i + 1}번 창구`);
        }
        let queue = await create(Object.assign({}, this.state, {
            lanes,
        }));
        history.push(`/admin/${queue.id}`);
    }
    render() {
        const { name, lanesCount, otp, useBells } = this.state;
        return (
            <div className="Create">
                <form onSubmit={this.handleCreate.bind(this)}>
                    <h2 className="Create-title">대기열 생성</h2>
                    <label>
                        <input className="Create-input"
                            value={name}
                            onChange={this.handleChange.bind(this, 'name')}
                            name="name" type="text" /><br />
                        <span className="Create-description">생성할 대기열의 이름을 입력해주세요</span><br />
                    </label>
                    <label>
                        <input className="Create-input"
                            value={lanesCount}
                            onChange={this.handleChange.bind(this, 'lanesCount')}
                            name="lane" type="number" /><br />
                        <span className="Create-description">생성할 창구 수를 입력해주세요</span><br />
                    </label>
                    <label><span className="Create-use">OTP를 사용합니다</span>
                        <input className="Create-checkbox"
                            value={otp}
                            onChange={this.handleChange.bind(this, 'otp')}
                            name="otp" type="checkbox" />
                    </label><br />
                    <label><span className="Create-use">호출 기능을 사용합니다</span>
                        <input className="Create-checkbox"
                            value={useBells}
                            onChange={this.handleChange.bind(this, 'useBells')}
                            name="useBells" type="checkbox" />
                    </label><br />
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
