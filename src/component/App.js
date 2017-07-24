import React, { Component } from 'react';
import '../style/App.css';
import '../style/Home.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Home from './Home';
import Create from './Create';
import Info from './Info';
import Join from './Join';
import WaitingList from './WaitingList';
import Admin from './Admin';

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
                    <Route path="/admin" component={Admin} />
                </div>
            </Router>
        )
    }
}

export default App
