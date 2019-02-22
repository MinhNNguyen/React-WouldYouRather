import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleSignOut } from '../actions/authedUser'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { withRouter, NavLink } from 'react-router-dom'

class Navigation extends Component {

  render() {
    const { authedUser } = this.props

    if ( this.props.location.pathname === '/signin') {
      return <div></div>
    }
    
    return (
      <div className="app-nav"> 
        <NavLink 
          className="app-nav-item" 
          to="/">
          Home
        </NavLink>
        <NavLink 
          className="app-nav-item"
          to="/new">
          New Question
        </NavLink>
        <NavLink 
          className="app-nav-item"
          to="/leaderboard">
          Leaderboard
        </NavLink>
        <NavLink 
          className="app-nav-item"
          to="/signout">
          Sign Out
        </NavLink>
      </div>
    )
  }
} 

function mapStateToProps({dispatch}) {
  return {
    dispatch
  }
}

export default withRouter(connect(mapStateToProps)(Navigation))