import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'

class Leaderboard extends Component {
  render() {
    return (
      <div>
        <h3>Leaderboard</h3>
        <ul>
          {
            this.props.usersId.map((id) => (
              <li key={id}>
                <User id={id} />
              </li>
            ))
          }
        </ul>      
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    usersId: Object.keys(users)
      .sort((a, b) => users[b].name - users[a].name) 
  }
}

export default connect(mapStateToProps)(Leaderboard)