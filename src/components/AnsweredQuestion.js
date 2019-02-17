import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'

class AnsweredQuestion extends Component {
  render() {
    const { question } = this.props

    if (question === null) {
      return <p> This question does not exist </p>
    }

    const { id, name, avatar, timestamp, optionOne, optionTwo } = question 
    const firstVoteNumber = optionOne.votes.length 
      ? optionOne.votes.length
      : 0
    const secondVoteNumber = optionTwo.votes.length 
      ? optionTwo.votes.length
      : 0
    const totalVoteNumber = firstVoteNumber + secondVoteNumber 

    return (
      <div className="question">
        <div className="question-header">   
          <img 
            src={avatar}
            alt={`Avatar of ${name}`}
            className='avatar'
          />
          <div className="header-info">
            <span>{name} ask:</span>
            <div>{formatDate(timestamp)}</div> 
          </div>
        </div>
        <div className='question-body'>
          <h3>Results:</h3>
          {optionOne.text} <br />
          {firstVoteNumber} of {totalVoteNumber} <br />
          {optionTwo.text} <br />
          {secondVoteNumber} of {totalVoteNumber} <br />
        </div>
      </div>
    )
  }
}

function mapStateToProps({authedUser, users, questions}, { id }) {
  const question = questions[id]
  return {
    authedUser,
    question: question
      ? formatQuestion(question, users[question.author])
      : null
  }
}

export default connect(mapStateToProps)(AnsweredQuestion)