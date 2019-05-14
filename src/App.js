import React, {Component} from 'react';
import './App.css';
import './index.css';
import Header from './components/Header';
import ScanContainer from './features/scans/ScanContainer';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Header />
                <ScanContainer />
            </div>
        );
    }
}

export default App;
