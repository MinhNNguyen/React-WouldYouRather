import React, { Component } from 'react'
import Dashboard from './Dashboard'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import SignInPage from './SignInPage'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        {this.props.loading === true 
        ? null
        : <div className="App">
            <SignInPage />
            <br />
            <Dashboard />
            <br />
            <NewQuestion />
            <br />
            <Leaderboard />
          </div>
        }

      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
