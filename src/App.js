import React, { Component } from 'react';
import BarContainer from './containers/BarContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BarContainer />
        </header>
      </div>
    );
  }
}

export default App;
