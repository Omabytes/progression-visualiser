import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import SkillPage from './Pages/SkillPage';
import './App.css'


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/skill" component={SkillPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    )
  }
}

export default App;
