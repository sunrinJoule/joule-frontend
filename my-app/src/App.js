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

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/create" component={Create} />
                    <Route path="/join" component={Join} />
                    <Route path="/info" component={Info} />
                </div>
            </Router>
        )
    }
}

class Join extends Component {
    render() {
        return (
            <div>
                <h2>Join</h2>
            </div>
        )
    }
}

export default App
