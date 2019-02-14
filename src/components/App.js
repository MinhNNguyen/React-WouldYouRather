import React, { Component } from 'react'
import Dashboard from './Dashboard'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared' 

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    )
  }
}

export default connect()(App)
