import React, { Component } from 'react'
import Dashboard from './Dashboard'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="App">
        <Dashboard />
        <br />
        <NewQuestion />
        <br />
        <Leaderboard />
      </div>
    )
  }
}

export default connect()(App)
