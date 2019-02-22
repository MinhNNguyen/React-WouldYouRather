import React, { Component, Fragment } from 'react'
import Dashboard from './Dashboard'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import SignInPage from './SignInPage'
import LoadingBar from 'react-redux-loading'
import Navigation from './Navigation'
import SignOut from './Signout'
import QuestionPage from './QuestionPage'


class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div>
            {this.props.loading === true 
            ? null
            : <div>
                <Navigation />
                <Route path='/signin' exact component={SignInPage} />
                <Route path='/signout' exact component={SignOut} />
                <Route path='/' exact component={Dashboard} />
                <Route path='/new' exact component={NewQuestion} />
                <Route path='/question/:id' component={QuestionPage} />
                <Route path='/leaderboard' exact component={Leaderboard} />
              </div>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
    authedUser
  }
}

export default connect(mapStateToProps)(App)
