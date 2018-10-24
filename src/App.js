import React, { Component } from 'react'
import Skill from './components/Skill'
import SelectorContainer from './containers/SelectorContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SelectorContainer />
        </header>
        <body>
          <div className="skills">
            <Skill skillName="Charisma"/>
            <Skill skillName="Constitution"/>
            <Skill skillName="Dexterity"/>
            <Skill skillName="Intelligence"/>
            <Skill skillName="Strength"/>
            <Skill skillName="Wisdom"/>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
