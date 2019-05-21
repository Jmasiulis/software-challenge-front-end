import React from 'react';
import './App.css';
import './index.css';
import Header from './components/Header';
import ScanContainer from './features/scans/ScanContainer';

export default function App() {
  return (
    <div className="App">
      <Header />
      <ScanContainer />
    </div>
  );
}
