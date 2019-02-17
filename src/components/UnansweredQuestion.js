import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'
import { handleAnswerQuestion } from '../actions/questions'

class UnansweredQuestion extends Component {

  state = {
    selectedOption: '',
    toAnsweredQuestion: false
  }

  handleOptionChange = (e) => {
    this.setState({
      ...this.state,
      selectedOption: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, question, authedUser } = this.props
    const { selectedOption } = this.state

    dispatch(handleAnswerQuestion({
      authedUser,
      qid: question.id,
      answer: selectedOption
    }))
  }

  render() {
    const { question } = this.props

    if (question === null) {
      return <p> This question does not exist </p>
    }

    const { id, name, avatar, timestamp, optionOne, optionTwo } = question 

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
          <h3>Would You Rather ..</h3>
          <form className="submit-answer" onSubmit={this.handleSubmit}>
            <input type="radio" 
                   value="optionOne" 
                   checked={this.state.selectedOption === 'optionOne'}
                   onChange={this.handleOptionChange}/>
            {optionOne.text} <br />
            <input type="radio" 
                   value="optionTwo" 
                   checked={this.state.selectedOption === 'optionTwo'}
                   onChange={this.handleOptionChange}/>
            {optionTwo.text} <br />
            <button type="submit">Submit</button> 
          </form>
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

export default connect(mapStateToProps)(UnansweredQuestion)