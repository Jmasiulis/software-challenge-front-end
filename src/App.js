import React, {Component} from 'react';
import './App.css';
import './index.css';
import ScanContainer from './features/scans/ScanContainer';

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    Software Challenge
                </header>
                <ScanContainer />
            </div>
        );
    }
}

export default App;
