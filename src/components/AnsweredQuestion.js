import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { withRouter, Link } from 'react-router-dom'

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
    const firstVotePercentage = parseFloat(100 * firstVoteNumber / totalVoteNumber).toFixed(2)
    const secondVotePercentage = parseFloat(100 * secondVoteNumber / totalVoteNumber).toFixed(2)

    return (
      <Link className="question-link" to={`/question/${id}`}>
      <div>
        <div className="card card-question my-2">
          <div className="card-body">
            <h5 className="card-title">Result for</h5>
            <div className="question-header"> 
              <img 
                src={avatar}
                alt={`Avatar of ${name}`}
                className='avatar'
              />
              <div className="header-info">
                <span>{name}'s question</span>
                <div>at {formatDate(timestamp)}</div> 
              </div>
            </div>
            <div className="result-group-one">
              <p className="option-text">{optionOne.text}</p> 
              <ProgressBar className="result-bar" now={firstVotePercentage} label={`${firstVotePercentage}%`} />
              <p className="text-center">{firstVoteNumber} of {totalVoteNumber} </p>  
            </div>
            <div className="result-group-two">
              <p className="option-text">{optionTwo.text}</p>
              <ProgressBar className="result-bar" now={secondVotePercentage} label={`${secondVotePercentage}%`} />
              <p className="text-center">{secondVoteNumber} of {totalVoteNumber} </p> 
            </div>
          </div>
        </div>
      </div>
      </Link>
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

export default withRouter(connect(mapStateToProps)(AnsweredQuestion))