import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Post from './Post';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Joule</h1>
//         <button><a href="http://www.naver.com">방 생성</a></button>
//         <br />
//         <button><a href="http://www.google.com">들어가기</a></button>
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//         <ul>
//             <Post name={"test post"} key={1} />
//         </ul>
//       </div>
//     );
//   }
// }
//
// export default App;

class App extends Component {
    render() {
        return (
          <Router>
            <div>
              <Link to="/create"><button>방생성</button></Link>
              <Link to="/join"><button>들어가기</button></Link>

              <Route exact path="/" component={Home}/>
              <Route path="/create" component={Create}/>
              <Route path="/join" component={Join}/>
            </div>
          </Router>
        )
    }
}

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home</h2>
            </div>
        )
    }
}

class Create extends Component {
    render() {
        return (
            <div>
                <h2>Create</h2>
            </div>
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
