import React, { Component, PropTypes } from 'react';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
        };
    }
    handleClick(e) {
        this.setState({ visible: !this.state.visible });
    }
    render() {
        const { visible } = this.state;
        const name = this.props.name;
        console.log(this.props.name);
        return (
            <div className="post">
                { visible && (
                    <span>{name} is a post!</span>
                ) }
                <button onClick={this.handleClick.bind(this)}>Click</button>
            </div>
        )
    }
}

Post.propTypes = {
    name: PropTypes.string,
}
