import React, { Component } from 'react'
import { connect } from 'react-redux'

class SignInPage extends Component {
  render() {
    const { users } = this.props

    console.log()

    return (
      <div>
        <div>
        <h4>Welcome to Would You Rather Game!</h4>
        <p>Please sign in to continue</p>
        </div>
        <div>
          <img 
            src=""
            alt=""
            className=""
          />
          <h2>Sign In</h2>
          <form action="">
            <select name="username">
              {
                Object.keys(users).map((user) => (
                  <option key={user} value={user}>
                    {user}
                  </option>
                ))
              }
            </select>
            <button value="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps({users}) {
  return {
    users,
  }
}

export default connect(mapStateToProps)(SignInPage)