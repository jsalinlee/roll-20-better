import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import StatBlock from './components/stat-block/stat-block.component';

class App extends Component {
    render() {
        return (
            <div className="App">
                <StatBlock key="1" monster="goblin" />
                <StatBlock key="2" monster="bugbear" />
            </div>
        );
    }
}

export default App;
