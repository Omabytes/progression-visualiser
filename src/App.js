import React, { Component } from 'react'
import Skill from './components/Skill'
import SelectorContainer from './containers/SelectorContainer'
import './App.css';

const skillNames = [
  "Charisma",
  "Constitution",
  "Dexterity",
  "Intelligence",
  "Strength",
  "Wisdom"
]

const generateSkills = function(skillName) {
  return <Skill skillName={skillName} />
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SelectorContainer />
        </header>
        <body>
          <div className="skills">
            {skillNames.map(generateSkills)}
          </div>
        </body>
      </div>
    );
  }
}

export default App;
