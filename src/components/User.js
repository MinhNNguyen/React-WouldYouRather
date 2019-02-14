import React, { Component } from 'react'
import { connect } from 'react-redux'

class User extends Component {
  render() {
    const { user } = this.props
    
    if (user === null) {
      return <p> This user does not exist </p>
    }

    const { name, answers, questions } = user 
    const answered = Object.keys(answers).length
    const created = questions.length
    const score  = answered + created
    
    return (
      <div>
        {name} <br />
        Questions Answered: {answered} <br />
        Questions Created: {created} <br />
        Score: {score}
      </div>
    )
  }
}

function mapStateToProps({authedUser, users}, { id }) {
  const user = users[id]
  return {
    authedUser,
    user: user
  }
}

export default connect(mapStateToProps)(User)