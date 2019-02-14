import React, { Component } from 'react'
import { connect } from 'react-redux'
import UnansweredQuestion from './UnansweredQuestion'
import AnsweredQuestion from './AnsweredQuestion'

class Dashboard extends Component {
  render() {

    return (
      <div>
        <ul>
          {
            this.props.answered_questionIds.map((id) => (
              <li key={id}>
                <AnsweredQuestion id={id} />
              </li>
            ))
          }
        </ul>  
        <ul>
          {
            this.props.unanswered_questionIds.map((id) => (
              <li key={id}>
                <UnansweredQuestion id={id} />
              </li>
            ))
          }
        </ul>      
      </div>
    )
  }
}

function mapStateToProps({authedUser, users, questions }) {
  const unanswered_questions = Object.keys(questions)
    .filter(question => !Object.keys(users[authedUser].answers).includes(question))
  const answered_questions = Object.keys(questions)
    .filter(question => Object.keys(users[authedUser].answers).includes(question))

  return {
    unanswered_questionIds: unanswered_questions
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    answered_questionIds: answered_questions
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)   
  }
}

export default connect(mapStateToProps)(Dashboard)