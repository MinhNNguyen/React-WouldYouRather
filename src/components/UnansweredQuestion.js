import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'
import { handleAnswerQuestion } from '../actions/questions'
import { Button, Form } from 'react-bootstrap'
import { withRouter, Link } from 'react-router-dom'

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
    const { selectedOption } = this.state

    if (question === null) {
      return <p> This question does not exist </p>
    }

    const { id, name, avatar, timestamp, optionOne, optionTwo } = question 

    return (
      <Link className="question-link" to={`/question/${id}`}>
        <div>
          <div className="card card-question my-2">
            <div className="card-body">
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
              <h3>Would You Rather ...</h3>
              <Form onSubmit={this.handleSubmit}>
                <Button
                  variant="outline-primary"
                  block
                  value="optionOne"
                  checked={selectedOption === 'optionOne'}
                  onClick={this.handleOptionChange}>
                  {optionOne.text}
                </Button>
                <Button
                  variant="outline-primary"
                  block
                  value="optionOne"
                  checked={selectedOption === 'optionOne'}
                  onClick={this.handleOptionChange}>
                  {optionTwo.text} 
                </Button>
                <Button 
                  type="submit"
                  className="new-question-button"
                  variant="btn btn-lg btn-primary btn-block text-uppercase"
                  disabled={selectedOption === ''}>
                  Submit
                </Button>
              </Form>
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

export default withRouter(connect(mapStateToProps)(UnansweredQuestion))