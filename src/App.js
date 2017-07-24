import React, { Component } from 'react';
import './App.css';
import './Home.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Post from './Post';
import Home from './Home';
import Create from './Create';
import Info from './Info';
import Join from './Join';
import WaitingList from './WaitingList';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/create" component={Create} />
                    <Route path="/join" component={Join} />
                    <Route path="/info" component={Info} />
                    <Route path="/list" component={WaitingList} />
                </div>
            </Router>
        )
    }
}

export default App
